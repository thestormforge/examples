#!/bin/sh
set -e

{

# curl_pushgateway_test() tests for a valid PUSHGATEWAY_URL by attempting a
# POST of a test metric, checking for a valid curl return code, a valid
# HTTP response code, and lastly a successful query of the test metric value.
curl_pushgateway_test() {
  HTTP_CODE=$(echo "test_metric 42" | curl -s --connect-timeout 5 -w "%{http_code}" --data-binary @- "$@" &2>1)

  if  [ $? -ne 0 ]; then
    echo "PUSHGATEWAY_URL was specified but test connection to ${PUSHGATEWAY_URL} failed. Exiting. "
    return 1
  fi

# curl can sometimes return text along with the http code.
  if [[ ! "${HTTP_CODE}" =~ '^[0-9]+$' ]]; then
    echo "Pushgateway returned a non-numeric error code (${HTTP_CODE}). "
    return 1
  elif [[  ${HTTP_CODE} -lt 200 || ${HTTP_CODE} -gt 299 ]] ; then
    echo "Pushgateway returned HTTP error (${HTTP_CODE}). "
    return 1
  fi

  echo "Verifying POSTED test metric..."
  QUERY_BASE=$(echo $PUSHGATEWAY_URL | cut -d\/ -f1-3)
  TEST_VALUE=$(curl -s "${QUERY_BASE}/api/v1/metrics" | jq -r '.data[0].test_metric.metrics[0].value')
  printf "Queried test mertric value: \"${TEST_VALUE}\" ..."
  if  [ $TEST_VALUE -ne 42 ]; then
    echo " FAILED!"
    echo "\tTest metric POST was successful but test metric verification query failed. Exiting. "
    return 1
  fi
  echo " PASSED!"
}

if [ -z "${NAMESPACE}" ]; then
  echo "No Kubernetes namespace specified. Exiting."
  exit 1
fi

if [ -z "${APP_NAME}" ]; then
  echo "No application name specified. Exiting."
  exit 1
fi

# If PUSHGATEWAY_URL is defined, test the connection to see if its viable, exit with error if not
if [ -n "${PUSHGATEWAY_URL}" ]; then
  echo "PUSHGATEWAY_URL was specified testing connection... "
  curl_pushgateway_test ${PUSHGATEWAY_URL}
  echo "Successfully connected to ${PUSHGATEWAY_URL} and POSTED a test metric. Proceeding. "
fi

echo "Searching for application pod for ${APP_NAME} application..."
APP_POD=$(kubectl -n ${NAMESPACE} get pods | grep  ${APP_NAME} | cut -d\  -f1 | grep -E "${APP_NAME}-[0-9a-z]{9,10}-[0-9a-z]{5}")
if [ -z "${APP_POD}" ]; then
  echo "Could not find an application pod. Exiting."
  exit 1
fi

echo "Application pod found: ${APP_POD}."

CONTAINER_READY_TIME=$(kubectl -n ${NAMESPACE} get pod ${APP_POD} -o json | jq -r '.status.conditions[] | select(.status == "True" and .type == "ContainersReady") | .lastTransitionTime')
if [ -z "${CONTAINER_READY_TIME}" ]; then
  echo "Could not find the app pod's ContainersReady time."
  exit 1
fi

echo "ContainersReady time: ${CONTAINER_READY_TIME}."
CONTAINER_READY_TIME_SECONDS=$(date -D "%Y-%m-%dT%H:%M:%SZ" -d "${CONTAINER_READY_TIME}" "+%s")
echo "ContainersReady time in seconds: ${CONTAINER_READY_TIME_SECONDS}."

CONTAINER_START_TIME=$(kubectl -n ${NAMESPACE} get pod ${APP_POD} -o json | jq -r '.status.containerStatuses[0].state.running.startedAt')
if [ -z "${CONTAINER_START_TIME}" ]; then
  echo "Could not find the app pod's start time."
  exit 1
fi

echo "Pod (container) start time: ${CONTAINER_START_TIME}."
CONTAINER_START_TIME_SECONDS=$(date -D "%Y-%m-%dT%H:%M:%SZ" -d "${CONTAINER_START_TIME}" "+%s")
echo "Pod (container) start time in seconds: ${CONTAINER_START_TIME_SECONDS}."

APP_STARTUP_TIME=$(echo $(( ((${CONTAINER_READY_TIME_SECONDS} - ${CONTAINER_START_TIME_SECONDS} )) )))
echo "Application took ${APP_STARTUP_TIME} seconds to startup"

# Push to the Prometheus PushGateway
echo "application_startup_time ${APP_STARTUP_TIME}"

if [ -n "${PUSHGATEWAY_URL}" ]; then
  echo "application_startup_time ${APP_STARTUP_TIME}" | curl --data-binary @- "${PUSHGATEWAY_URL}"
fi

} 2>&1 | tee -a /proc/1/fd/1

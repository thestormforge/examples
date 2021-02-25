#!/bin/bash

# If there is no HAR file, exit with status 1.
if [ ! -f "${HAR_FILE}" ]; then
	exit 1
fi

cat ${HAR_FILE} | \
jq -c -f /har/harshrinker.jq --arg limit ${HAR_LIMIT} | \
forge har - | \
sed -e "s/[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}/${INGRESS_ADDRESS}/g" \
> ${TEST_CASE_FILE}
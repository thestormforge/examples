#!/bin/bash

for PR in uuidgen kubectl jq 
do
    PREREQUISITE=${PR}
    if ! [ -x "$(command -v ${PREREQUISITE})" ]; then
    echo "Please install ${PREREQUISITE} before proceeding." >&2
    exit 1
    fi
done

INGRESS_IP=$(kubectl get service voting-service -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
echo $INGRESS_IP

if ! [ -n "$INGRESS_IP" ]; then
    INGRESS_IP=$(kubectl get service voting-service -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
fi


if [ -n "$INGRESS_IP" ]; then
  echo "Voting Service Ingress IP: $INGRESS_IP"
else
  echo "Voting Service Ingress IP Not Available"
  exit 1
fi

SF_UUID=$(uuidgen) 
SF_UUID=$(echo ${SF_UUID} | tr "[:upper:]" "[:lower:]")

read -p "Number of Trials [default: 20]: " BUDGET
if [ -z "$BUDGET" ]; then
  echo "Number of Trials not set, defaulting to 20"
  BUDGET=20
fi

sed  -e "s/TARGET_SERVER/${INGRESS_IP}/g" -e "s/UUID/${SF_UUID:24}/g" -e "s/BUDGET/${BUDGET}/g" experiment.yaml \
    > "neoload-${SF_UUID:24}.yaml"

sed '/End Experiment/q' experiment.yaml | stormforge rbac - > "neoload-${SF_UUID:24}-rbac.yaml"

cat - <<-EOF
Experiment neoload-${SF_UUID:24} is ready! To create it, run the following command:

    kubectl apply -f neoload-${SF_UUID:24}-rbac.yaml -f neoload-${SF_UUID:24}.yaml

EOF

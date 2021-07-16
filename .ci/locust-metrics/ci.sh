#!/bin/bash

set -xe

echo "Create experiment and application"
kustomize build .ci/locust-metrics | kubectl apply -f -
echo "Create new trial"
redskyctl generate trial \
  --assign voting_service_cpu=2000 \
  --assign voting_service_memory=4096 \
  -f <(kubectl get experiment locust-metrics -o yaml) | \
    kubectl create -f -
kubectl get trial -o wide
# Change this back to a higher value when we can schedule the trial
echo "Wait for trial to complete (600s timeout)"
kubectl wait trial \
  -l redskyops.dev/experiment=locust-metrics \
  --for condition=redskyops.dev/trial-complete \
  --timeout 600s
kubectl get trial -o wide
kubectl get pods -o wide -l redskyops.dev/experiment=locust-metrics
echo "Cleanup experiment and application"
kustomize build locust-metrics | kubectl delete -f -

#!/bin/bash

set -xe

kustomization=.ci/elasticsearch
experiment=elasticsearch-example
timeout=2700s

echo "Create experiment and application"
kustomize build ${kustomization} | kubectl apply -f -
echo "Create new trial"
redskyctl generate trial \
  --assign replicas=3 \
  --assign cpu=333 \
  --assign memory=1500 \
  --assign heap_percent=80 \
  -f <(kubectl get experiment ${experiment} -o yaml) | \
    kubectl create -f -
kubectl get trial -o wide
echo "Wait for trial to complete (${timeout} timeout)"
# Wait for trial ready ( try to catch early failures quick )
# # Good grief this is obnoxious... 120s is insufficient
kubectl wait trial \
  -l redskyops.dev/experiment=${experiment} \
  --for condition=redskyops.dev/trial-ready \
  --timeout 180s
kubectl wait trial \
  -l redskyops.dev/experiment=${experiment} \
  --for condition=redskyops.dev/trial-complete \
  --timeout ${timeout}
kubectl get trial -o wide
kubectl get pods -o wide -l redskyops.dev/experiment=${experiment}
echo "Cleanup experiment and application"
kustomize build ${kustomization} | kubectl delete -f -

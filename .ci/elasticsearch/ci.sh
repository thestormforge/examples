#!/bin/bash

set -xe

kustomization=.ci/elasticsearch
experiment=elasticsearch-example
timeout=1800s

echo "Create experiment and application"
kustomize build ${kustomization} | kubectl apply -f -
echo "Create new trial"
redskyctl generate trial \
  --assign replicas=3 \
  --assign cpu=500 \
  --assign memory=1500 \
  --assign heap_percent=80 \
  -f <(kubectl get experiment ${experiment} -o yaml) | \
    kubectl create -f -
kubectl get trial -o wide
echo "Wait for trial to complete (${timeout} timeout)"
kubectl wait trial \
  -l redskyops.dev/experiment=${experiment} \
  --for condition=redskyops.dev/trial-complete \
  --timeout ${timeout}
kubectl get trial -o wide
kubectl get pods -o wide -l redskyops.dev/experiment=${experiment}
echo "Cleanup experiment and application"
kustomize build ${experiment} | kubectl delete -f -

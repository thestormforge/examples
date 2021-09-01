# Locust Metrics Example

This example shows how to optimize the voting app using the metrics built into Locust. This is useful when tuning an application that does not have metrics yet.

## Deploy the voting app

Run
```
kustomize build . | kubectl apply -f -
```
## Create an experiment

Once the voting app is ready, launch an experiment using:

```
kubectl apply -f experiment.yaml
```

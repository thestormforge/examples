# Locust Metrics Example

This example shows how to optimize the voting app using:
- the experiment generator (controller v1.9.0+ required)
- the metrics built into Locust

This is useful when tuning an application that does not have metrics yet.

## Deploy the voting app

Run
```
kustomize build . | kubectl apply -f -
```
## Create an experiment

The `app.yaml` file defines the experiment to be generated. In this experiment we use Locust for the load test

```
scenarios:
- name: 100-clients
  locust:
    users: 100
    spawnRate: 20
    locustfile: locustfile.py
```

We optimize for cost and p95 latency as provided by Locust:
```
objectives:
- name: cost-gcp # Also "cost", "cost-aws", "cpu", ...
- name: p95-latency
```

Generate an experiment and launch it using:
```
redskyctl generate experiment -f app.yaml | kubectl apply -f -
```

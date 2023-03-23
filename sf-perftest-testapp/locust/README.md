# Locust experiment

This experiment utilizes [Locust](https://locust.io/) to drive traffic against the Test App.
This experiment is a demonstration of the [Locust trial image](https://github.com/thestormforge/optimize-trials/tree/main/locust) provided by StormForge to enable the use of Locust in Optimize Pro trial jobs.

## Prerequisites

- A Kubernetes cluster
- `kubectl` configured to connect to your cluster
- [Optimize Pro](https://docs.stormforge.io/optimize-pro/getting-started/install/) installed on your cluster
- The StormForge PerfTest [Test App](../application/README.md) deployed on your cluster

## Running the Experiment

- Edit the `name` field in the `experiment.yaml` file, setting it to something unique
- Inject the JMeter test plan file into a configmap in your cluster with the following command:
  ```sh
  kubectl create configmap locustconfig --from-file=./locustfile.py
  ```
- Deploy the experiment with the following command:
  ```sh
  kubectl apply -f ./experiment-rbac.yaml -f ./experiment.yaml
  ```

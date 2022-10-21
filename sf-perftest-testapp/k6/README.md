# k6 experiment

This experiment utilizes [k6](https://k6.io/) to drive traffic against the Test App.
This experiment is a demonstration of the [k6 trial image](https://github.com/thestormforge/optimize-trials/tree/main/k6) provided by StormForge to enable the use of k6 in Optimize Pro trial jobs.

## Prerequisites

- A Kubernetes cluster
- `kubectl` configured to connect to your cluster
- [Optimize Pro](https://docs.stormforge.io/optimize-pro/getting-started/install/) installed on your cluster
- The StormForge PerfTest [Test App](../application/README.md) deployed on your cluster

## Running the Experiment

- Edit the `name` field in the `experiment.yaml` file, setting it to something unique
- Inject the k6 script file into a configmap in your cluster with the following command:
  ```sh
  kubectl create configmap k6-test-file --from-file=./load_script.js
  ```
- Deploy the experiment with the following command:
  ```sh
  kubectl apply -f ./experiment.yaml
  ```
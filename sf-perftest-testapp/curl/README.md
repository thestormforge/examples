# CURL experiment

This experiment utilizes the [CURL utility](https://curl.se/) to drive traffic against the Test App.
Note that CURL is not designed to be a performance testing tool, and thus it is not ideally suited for generating any significant amount of load.
This experiment is best regarded as a proof of concept or end to end demonstration of an Optimize Pro experiment that uses a performance tool or utility that is not officially supported in its [trial job](https://docs.stormforge.io/optimize-pro/concepts/lifecycle/#run-trial-job).

## Prerequisites

- A Kubernetes cluster
- `kubectl` configured to connect to your cluster
- [Optimize Pro](https://docs.stormforge.io/optimize-pro/getting-started/install/) installed on your cluster
- The StormForge PerfTest [Test App](../application/README.md) deployed on your cluster

## Running the Experiment

- Edit the `name` field in the `experiment.yaml` file, setting it to something unique
- Deploy the experiment with the following command:
  ```sh
  kubectl apply -f ./experiment.yaml
  ```
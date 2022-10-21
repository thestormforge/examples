# JMeter experiment

This experiment utilizes [JMeter](https://jmeter.apache.org/) to drive traffic against the Test App.
This experiment is a demonstration of the [JMeter trial image](https://github.com/thestormforge/optimize-trials/tree/main/jmeter) provided by StormForge to enable the use of JMeter in Optimize Pro trial jobs.

## Prerequisites

- A Kubernetes cluster
- `kubectl` configured to connect to your cluster
- [Optimize Pro](https://docs.stormforge.io/optimize-pro/getting-started/install/) installed on your cluster
- The StormForge PerfTest [Test App](../application/README.md) deployed on your cluster

## Running the Experiment

- Edit the `name` field in the `experiment.yaml` file, setting it to something unique
- Inject the JMeter test plan file into a configmap in your cluster with the following command:
  ```sh
  kubectl create configmap jmeterconfig --from-file=./test.jmx
  ```
- Deploy the experiment with the following command:
  ```sh
  kubectl apply -f ./experiment.yaml
  ```
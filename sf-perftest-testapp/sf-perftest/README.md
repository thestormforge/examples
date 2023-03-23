# StormForge Performance Testing experiment

This experiment utilizes [StormForge Performance Testing](https://app.stormforge.io/perftest) to drive traffic against the Test App.
This experiment demonstrates how to use the `stormforge` CLI container image as a trial image to use Stormforge Performance Testing in Optimize Pro experiments.

## Prerequisites

- The `stormforge` CLI, [installed and authenticated](https://docs.stormforge.io/optimize-pro/getting-started/install/#installing-the-stormforge-command-line-interface)
- A Kubernetes cluster
- `kubectl` configured to connect to your cluster
- [Optimize Pro](https://docs.stormforge.io/optimize-pro/getting-started/install/) installed on your cluster
- The StormForge PerfTest [Test App](../application/README.md) deployed on your cluster
- A public-facing Ingress for the Test App on your cluster

## Running the Experiment

- Edit the first line of the `testcase.js` file, replacing `testapp-ingress.example.com` with the public URL or IP address of the Test App in your cluster.
- Upload the testcase to your StormForge Performance Testing account with the following command:
  ```sh
  stormforge create test-case testapp_optimize_trial --from-file=./testcase.js
  ```
- Edit the `name` field in the `experiment.yaml` file, setting it to something unique
- Inject a StormForge Performance Testing authentication token into your cluster for use by the StormForge CLI in the trial jobs with the following command:
  ```sh
  kubectl create secret generic stormforge-token --from-env-file=<(stormforge auth new-token --name perftest-testapp-experiment)
  ```
  Note that this token will show up in the Optimize Pro [clusters list](https://app.stormforge.io/optimize/clusters) as "perftest-testapp-experiment".
- Deploy the experiment with the following command:
  ```sh
  kubectl apply -f ./experiment.yaml -f ./experiment-rbac.yaml -f ./experiment.yaml
  ```

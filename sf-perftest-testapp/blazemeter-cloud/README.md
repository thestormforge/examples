# StormForge Performance Testing experiment

This experiment utilizes [BlazeMeter](https://www.blazemeter.com/) to drive traffic against the Test App.
This experiment demonstrates how to use the [BlazeMeter Cloud](https://github.com/thestormforge/optimize-trials/tree/main/blazemeter-cloud) trial image to utilize a BlazeMeter load test with Optimize Pro.

## Prerequisites

- A Kubernetes cluster
- `kubectl` configured to connect to your cluster
- [Optimize Pro](https://docs.stormforge.io/optimize-pro/getting-started/install/) installed on your cluster
- The StormForge PerfTest [Test App](../application/README.md) deployed on your cluster
- A public-facing Ingress for the Test App on your cluster

## Running the Experiment

- Edit the last line of the `load_test.yaml` file, replacing `testapp-ingress.example.com` with the public URL or IP address of the Test App in your cluster.
- Create a BlazeMeter test by uploading the `load_test.yaml` (See the [BlazeMeter documentation](https://guide.blazemeter.com/hc/en-us/articles/207387369) for details.) Note the URL of your test, you will need it later.
- Create a [BlazeMeter API key](https://guide.blazemeter.com/hc/en-us/articles/115002213289-BlazeMeter-API-keys--BlazeMeter-API-keys-), noting the key ID and secret. They will only be displayed once.
- Edit the `name` field in the `experiment.yaml` file, setting it to something unique
- Edit the `BLAZEMETER_API_ID` (line 95), `BLAZEMETER_API_SECRET` (line 97), and `BLAZEMETER_TEST_URL` (line 99) environment variables in the `experiment.yaml` file, setting them to the values you noted in the previous steps.
- Deploy the experiment with the following command:
  ```sh
  kubectl apply -f ./experiment.yaml
  ```
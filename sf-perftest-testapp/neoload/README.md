# NeoLoad experiment

This experiment utilizes [NeoLoad](https://www.tricentis.com/products/performance-testing-neoload) to drive traffic against the Test App.
This experiment demonstrates how to use the [NeoLoad trial image](https://github.com/thestormforge/optimize-trials/tree/main/neoload) to utilize a NeoLoad performance test in an Optimize Pro experiment.

## Prerequisites

- A Kubernetes cluster
- `kubectl` configured to connect to your cluster
- [Optimize Pro](https://docs.stormforge.io/optimize-pro/getting-started/install/) installed on your cluster
- The StormForge PerfTest [Test App](../application/README.md) deployed on your cluster
- A public-facing Ingress for the Test App on your cluster

## Running the Experiment

- Edit line 7 of the `scenario.yaml` file, replacing `testapp-ingress.example.com` with the public URL or IP address of the Test App in your cluster.
- Edit the `name` field in the `experiment.yaml` file, setting it to something unique.
- Edit the NeoLoad trial image configuration environment variables on lines 96 - 103 of the `experiment.yaml` file, checking or setting `TEST_NAME`, `ZONE`, and `LGS` as appropriate.
- Create a [NeoLoad access token](https://documentation.tricentis.com/nlweb/4.0/en/WebHelp/#24621.htm).
- Place the `BLAZEMETER_API_ID` and `BLAZEMETER_API_SECRET` into a Kubernetes Secret object using the following command, using the access token you created in the previous step:
  ```sh
  kubectl create secret generic neoload-token \
  --from-literal="NEOLOAD_TOKEN=<NeoLoad access token>" \
  ```
  This secret is referenced using `envFrom` with a `secretRef` in the trial job container spec in `experiment.yaml` (line 93).
- Place the `scenario.yaml` NeoLoad test case file in a Kubernetes ConfigMap object using the following command:
  ```sh
  kubectl create configmap neoload-artifacts \
  --from-file=scenario.yaml
  ```
- Deploy the experiment with the following command:
  ```sh
  kubectl apply -f ./experiment.yaml
  ```
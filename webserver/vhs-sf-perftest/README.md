# StormForge Optimize with VHS and StormForge Performance Test

This example demonstrates a workflow for optimizing a web application using a load test that is automatically generated from recorded HTTP traffic.
The HTTP traffic is recorded from the application to be optimized using [VHS](https://github.com/rename-this/vhs), and the load test is automatically generated and run during the Optimize experiment using VHS and StormForge Performance Test tooling.
The web application used for this example is the [Voting Web App](https://github.com/thestormforge/examples/tree/master/voting-webapp).

This workflow has four main phases:

1. Record HTTP traffic using VHS.
2. Prepare the cluster
3. Configure the Optimize experiment
4. Run Optimize experiment with load test.

#### Prerequisites

- `kubectl` installed and configured with your cluster
- `kustomize` (v3.1.0+)
- [StormForge Optimize Controller (`redskyctl`)](https://github.com/thestormforge/optimize-controller) installed on your cluster
- [StormForge Performance Test CLI (`forge`)](https://github.com/stormforger/cli)
- Google Cloud Storage account

## Record Traffic with VHS

The rest of this writeup will assume that you have recorded some network traffic with VHS, and that the recorded network traffic is stored in a Google Cloud Storage object.
This network traffic should be captured in an environment that is similar or identical to the application that will be optimized.
The [VHS repository](https://github.com/rename-this/vhs) contains an example that demonstrates capturing HTTP traffic from a cluster running the Voting Web App.
It can be find in the subdirectory [hack/demo](https://github.com/rename-this/vhs/tree/main/hack/demo).

This demo deploys the voting web app with a VHS container in each of voting-service pod (4 pods), generates some load with simple script using `curl`, and captures 5 minutes of load to a Google Cloud Storage bucket. 
The demo will generate four files, and any one of those files can be used for the remaining steps in this example.

## Prepare the cluster

First, deploy the voting web app with ingress to the cluster by running the following command:

```terminal
kustomize build application | kubectl apply -f -
```

### Create secrets

#### StormForge Performance Test token

A StormForge Performance Test authentication token must be present in the cluster to run the load tests.

```terminal
kubectl create secret generic stormforger-service-account --from-literal=accessToken='<access token>'
```

A service account token can be generated using the Performance Test command line tool, `forge`:

```terminal
forge sa create <organization name> <svc account name>
```

Be careful to keep track of your service account token until it is injected into the cluster. It will only be shown once.
More information on service accounts can be found in the [StormForge Performance Test documentation](https://docs.stormforger.com/guides/forge-cli/#authentication).

#### Google Cloud Storage service account

We'll need to load a GCS service account into the cluster as a secret.
This file should be named `service-account.json`.

```terminal
kubectl create secret generic gcs-creds --from-file service-account.json
```

### Create init container configmap

The initialization container configmap can be applied to the cluster using the following command:

```terminal
kubectl apply -f harutils.yaml
```

Alternatively, if you have made changes to the initialization scripts, you can generate the configmap from the two files used in the initialization container:

```terminal
kubectl create configmap harutils --from-file har2testcase.sh  --from-file harshrinker.jq
```

## Configure the Optimize Experiment

There are several lines in the `experiment.yaml` file that must be configured prior to running the experiment.

First, the location of the recorded HTTP data must be configured. This is done by setting two environment variables in the initialization container spec:

| Name | Description | Location |
|---|---|---|
| `GCS_BUCKET` | Name of GCS bucket containing captured HTTP data | Lines 94-95 |
| `GCS_OBJECT` | Name of GCS object containing captured HTTP data | Lines 96-97 |

Second, the target for the load test must be set in the `experiment.yaml` file. The target address should be the address of the ingress deployed earlier.
The ingress address can be found by running the following command:

```terminal
kubectl get ingress
```

The ingress address (IP address or hostname; must be publicly accessible) must be set in the `experiment.yaml` file in the following two locations:
| Name | Location |
|---|---|
| `INGRESS_ADDRESS` | Lines 102 - 103 |
| `TARGET` | Lines 134 - 135 |

## Run the Optimize experiment

Run the following command to start the Optimize experiment:

```terminal
kubectl apply -f experiment.yaml
```
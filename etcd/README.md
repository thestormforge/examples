# etcd Example

## Introduction
[etcd](https://etcd.io) is a distributed, reliable key-value store for the most
critical data of a distributed system.

In this example, we demonstrate how one can effectively and efficiently tune
etcd resources by utilizing [the etcd benchmark tool](https://github.com/etcd-io/etcd/tree/master/tools/benchmark)
and [prometheus](https://prometheus.io).

## Prerequisites

You must have a Kubernetes cluster. Additionally, you will need a local configured copy of `kubectl`.

A local install of [Kustomize](https://github.com/kubernetes-sigs/kustomize/releases) (v3.1.0+) is required to manage the objects in your cluster.

Additionally, you will need to initialize Red Sky Ops in your cluster. You can
find installation instructions on the [Red Sky Ops documentation site](https://redskyops.dev/docs/install/).

## Example Resources

The resources for this tutorial can be found in the [`/etcd`](https://github.com/redskyops/redskyops-recipes/tree/master/etcd)
directory of the `redskyops-recipes` source repository. The following manifest define how to run etcd:

* `deployment.yaml`
  : The manifest for the etcd application.
* `certs.yaml`
  : Contains generated certificates for etcd.
* `prometheus.yaml`
  : The manifests for a prometheus deployment.

The actual experiment object is defined in the `experiment.yaml` manifest;
this includes the definition of the experiment itself (in terms of assignable
parameters and observable metrics) as well as the instructions for carrying
out the experiment (in terms of load generation and metric queries). Feel free
to edit the parameter ranges and change the experiment name to avoid conflicting
with other experiments in the cluster.

The prometheus deployment is configured for service discovery and without
persistent storage. This includes a service account and RBAC permissions for
scraping the required Kubernetes resources ( api server, kubelet, etc ).

To deploy the application,  run `kustomize build etcd/application | kubectl apply -f -`

To launch the experiment, run `kustomize build etcd | kubectl apply -f -`

## Experiment Lifecycle

For every trial, two pods will come up:
1. An `etcd` pod that trial will run against and get patched accordingly
2. An `<experiment-name>` pod which runs `benchmarks` against etcd - this is the actual trial pod

For more information on running, monitoring and maintaining experiments, please
refer to our [quickstart](https://redskyops.dev/docs/quickstart/) and
[experiment lifecycle](https://redskyops.dev/docs/lifecycle/) documentation.

## Certificates

There are generated certificates in the [`/etcd/application/certs`](https://github.com/redskyops/redskyops-recipes/tree/master/etcd/application/certs) directory.
These are included if you need to interact with etcd for any reason.

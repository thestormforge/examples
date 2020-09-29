# MongoDB Example

## Introduction

This is an example of an experiment that uses [Helm](https://helm.sh) as the way to deploy [MongoDB](https://mongodb.com).
It uses the [bitnami/mongodb helm chart](https://hub.helm.sh/charts/bitnami/mongodb) to deploy into [Kubernetes](https://kubernetes.io/).

In this example, we demonstrate how to tune MongoDB using a load test. This is done by using [mongo-perf](https://github.com/mongodb/mongo-perf) to generate load and thereby simulate real world load. This experiment will highlight the CPU and Memory requests/limits that will allow for the perfomance level desired.

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 4 nodes, 16 vCPUs (4 on each node) and 32GB of memory (8 on each node). Additionally, you will need a local configured copy of [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/).

A local install of [Kustomize](https://github.com/kubernetes-sigs/kustomize/releases) (v3.1.0+) is required to manage the objects in you cluster.

Additionally, you will to initialize Red Sky Ops in your cluster. You can view our [Quick Start Guide](<https://redskyops.dev/docs/quickstart/>]

## Example Resources

The resources for this tutorial can be found in the [`/mongodb`](https://github.com/redskyops/redskyops-recipes/tree/master/mongodb) directory of the `redskyops-recipes` source repository.

`experiment.yaml`
: The actual experiment object manifest; this includes the definition of the experiment itself (in terms of assignable parameters and observable metrics) and the instructions for carrying out the experiment (in terms of load generation and metric queries). Here is where you may change parameter ranges and the experiment name (to avoid experiment name conflicts in the cluster).

`kustomization.yaml`
: The input to Kustomize used to build the Kubernetes object manifests for this example.  

`application/results-exporter.yaml`
: The manifest for the results exporter (a utility container that holds results for the experimant loop).

`service-account.yaml`
: The manifest for the service account used by the controller to create and manage all of the assets in the experiment. This is applied just once to create the kubernetes user, role, and rolebinding.

`mongo-perf/`
: This directory contains files required to run the lightly modified mongo-perf container. There is *no need to build* the image; the folder is only included for reference.  

`mongo-perf/benchrun.py`
:The modification of this file is simply allowing the results JSON files to be kept and persisted in the result-exporter(below).

`result-exporter/app.py` :Contains the exporter application, `requirements.txt` are the python library requirements and `Dockerfile` contains the Docker commands to run the exporter container. There is *no need to build* the image; the folder is only included for reference.

`result-exporter/` : This directory contains files required to run the results exporter. The exporter's role is to expose the throughput metric over HTTP (in contrast to the original websocket implementation in the results service) so that it can be collected by the jsonpath metric collector.

`result-exporter/app.py` : Contains the exporter application, `requirements.txt` are the python library requirements and `Dockerfile` contains the Docker commands to run the exporter container. There is *no need to build* the image; the folder is only included for reference.

## Experiment Lifecycle

For the experiment, the pods and service for the result-exporter will persist throughout the entire experiment.

For every trial, several pods will come up, as needed for the testing.

1. `to create the experiment asset. Also has an init container to wait for all pieces to spin up.`
2. `mongo-db itself, spun up by Helm`
3. `trial execution with the mongo-perf container`
4. `trial delete pod to cleanup after the trial`

For more information on running, monitoring and maintaining experiments, please refer to our [quickstart](https://redskyops.dev/docs/quickstart/) and [experiment lifecycle](https://redskyops.dev/docs/lifecycle/) documentation.

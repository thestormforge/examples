# HPA Example

## TL;DR

Run
`redskyctl generate rbac -f experiment.yaml | kubectl apply -f -`
and then
`kustomize build . | kubect apply -n <my-namespace> -f -`


## Introduction

The goal of this example is to optimize the [voting webapp](https://github.com/thestormforge/examples/tree/master/voting-webapp) using a [Horizontal Pod Autoscaler (HPA)](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) for scaling up and down the `voting-service` deployment during a trial (load test).

We show how to define such stormforge optimization experiment using two load test engine: [Locust](locust.io) and [StormForger](stormforger.com)

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 4 nodes, 16 vCPUs (4 on each node) and 32GB of memory (8 on each node). Additionally, you will need a local configured copy of `kubectl`.

A local install of [Kustomize](https://github.com/kubernetes-sigs/kustomize/releases) (v3.1.0+) is required to manage the objects in you cluster.

Additionally, you will need a local configured copy of `kubectl` and to initialize StormForge Optimize in your cluster. You can download a binary for your platform from the [installation guide](https://docs.stormforge.io/getting-started/install/) and run `redskyctl init` (while connected to your cluster).

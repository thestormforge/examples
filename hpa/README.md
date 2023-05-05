# HPA Example

## TL;DR

Run
`stormforge rbac experiment.yaml | kubectl apply -f -`
and then
`kubect apply -n <my-namespace> -k .`

## Introduction

The goal of this example is to optimize the [voting webapp](https://github.com/thestormforge/examples/tree/master/voting-webapp) using a [Horizontal Pod Autoscaler (HPA)](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) for scaling up and down the `voting-service` deployment during a trial (load test).

We show how to define such stormforge optimization experiment using two load test engine: [Locust](https://locust.io) and [StormForge Performance Testing](https://www.stormforge.io/performance-testing/)

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 4 nodes, 16 vCPUs (4 on each node) and 32GB of memory (8 on each node).
Additionally, you will need `kubectl` and our `stormforge` CLI. Follow our [installation guide](https://docs.stormforge.io/optimize-pro/getting-started/install/) to get started.

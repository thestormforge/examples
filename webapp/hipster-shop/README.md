# Hipster Shop / Online Boutique optimization

This set of examples is based around the Google Online Boutique ecommerce example application, commonly known as the ["hipster shop"](./hipster-shop).

We provide an [example](./hipster-shop/k6/) that optimizes the `frontend` component of the shop for cost and 95th percentile latency using [k6](https://k6.io/) to generate load and provide metrics during the trials.

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 4 nodes, 16 vCPUs (4 on each node) and 32GB of memory (8 on each node). Additionally, you will need a local configured copy of `kubectl`.

Additionally, you will need to initialize StormForge Optimize in your cluster. You can download a binary for your platform from the [installation guide](install) and run `stormforge install optimize-pro` (while connected to your cluster).

[install]: https://docs.stormforge.io/optimize-pro/getting-started/install/

# Hipster Shop / Online Boutique optimization

This set of examples is based around the Google Online Boutique ecommerce example application, commonly known as the ["hipster shop"](./hipster-shop).

We provide an [example](./hipster-shop/k6/) that optimizes the `frontend` component of the shop for cost and 95th percentile latency using [k6](https://k6.io/) to generate load and provide metrics during the trials.

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 4 nodes, 16 vCPUs (4 on each node) and 32GB of memory (8 on each node).
Additionally, you will need `kubectl` and our `stormforge` CLI. Follow our [installation guide](https://docs.stormforge.io/optimize-pro/getting-started/install/) to get started.

[install]: https://docs.stormforge.io/optimize-pro/getting-started/install/

# Voting Webapp optimization

This set of examples shows how to use StormForge Optimize Pro to optimize a webapp using the [voting-webapp example](./voting-webapp). We optimize for the `cost` and `latency` using metrics provided by two load test generators:

- [Locust](https://locust.io)
- [StormForge Performance Testing](https://www.stormforge.io/performance-testing/)

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 4 nodes, 16 vCPUs (4 on each node) and 32GB of memory (8 on each node).
Additionally, you will need `kubectl` and our `stormforge` CLI. Follow our [installation guide](https://docs.stormforge.io/optimize-pro/getting-started/install/) to get started.

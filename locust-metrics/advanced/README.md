# Locust Metrics Advanced Example

## Background
This experiment builds upon our [Locust Metrics Recipe](https://github.com/redskyops/redskyops-recipes/tree/master/locust-metrics). The following parameters are patched to the experiment file:
* worker_memory
* worker_replicas
* redis_memory
* redis_cpu

This experiment also optimizes for two additional metrics:
* cost
* throughput

## Prerequisites
In order to run this experiment you most have a paid version of Red Sky Ops. To upgrade visit our [pricing page](https://www.carbonrelay.com/pricing/).

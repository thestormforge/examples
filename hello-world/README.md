# Hello World

This directory contains several "hello world" style tutorial experiments, which start at a very simple baseline experiment and incrementally add additional functionality, demonstrating one additional useful capability with each increment. The intention is to provide a step-by-step means of understanding the anatomy of an experiment.

## Experiments

### Hello World 101

Topics:

* Parameters
* Simple metrics
* Trials

This experiment has no dependencies, and can be run on any cluster with the Optimize Pro controller installed.

Please read the experiment file itself and familiarize yourself with the topics discussed in the comments there.

When ready, you can run the experiment using the following command.

```terminal
kubectl apply -f hello-world-101-experiment.yaml
```

### Hello World 102

Topics:

* setupTasks
* Prometheus metrics

This experiment picks up where Hello World 101 left off, and introduces two new topics. The experiment requires that additional RBAC authorizations be created to support running the setupTask.

Please read the experiment file itself and familiarize yourself with the topics discussed in the comments there.

When ready, you can run the experiment using the following command.

```terminal
kubectl apply \
  -f hello-world-102-resources.yaml
  -f hello-world-102-experiment.yaml
```

### Hello World 121

Topics:

* Patching existing k8s resources

Previous experiments left out the "patching" part of trials, focusing only on the trial job. This experiment introduces patches.

Please read the experiment file itself and familiarize yourself with the topics discussed in the comments there.

When ready, you can run the experiment using the following command.

```terminal
kubectl apply \
  -f hello-world-121-resources.yaml
  -f hello-world-121-experiment.yaml
```

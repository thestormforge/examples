# JVM Example

## Introduction
The Java Virtual Machine(JVM) is a widely used portable execution environment for running java-based applications. In this example, we demonstrate how to tune the JVM using the benchmarking suite [Renaissance](https://github.com/renaissance-benchmarks/renaissance/). Renaissance provides a variety of benchmarks that can be used to load test many aspects of the JVM such as just-in-time compilers, interpreters, and garbage collectors. This example shows how to i) patch individual trials and ii) tune JVM parameters alongside the Kubernetes resources.

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 2 nodes, 8vCPUs (4 on each node) and 16GB of memory (8 on each node).

A local install of [Kustomize](https://github.com/kubernetes-sigs/kustomize/releases) (v3.1.0+) is required to manage the objects in you cluster.

Additionally, you will need a local configured copy of `kubectl` and to initialize StormForge Optimize v1.6.0 or later in your cluster. You can download a binary for your platform from the [installation guide](https://docs.stormforge.io/getting-started/install/) and run `redskyctl init` (while connected to your cluster).

## Example Resources

The resources for this tutorial can be found in the [`/jvm/`](https://github.com/thestormforge/examples/jvm) directory of the `examples` source repository.

* `kustomization.yaml`
: The input to Kustomize used to build the Kubernetes object manifests for this example.

* `experiment.yaml`
: The actual experiment object manifest. In this experiment we vary parameters on both JVM (Heap size, parallel garbage collector threads, etc.) and the Kubernetes pods (the CPU and memory assigned to each pod). The experiment aims to minimize both the time it takes to run the load tests (duration) and the cost of running the cluster (cost). The maximum length a trial can run before being considered a failed trial is controlled by setting activeDeadlineSeconds in the pod spec in the trial template.

* `Dockerfile`
: A Dockerfile used to build the image used by the experiment.

* `docker-entrypoint.sh`
: A shell file that defines the docker configuration. The JAVA OPTS parameters get applied in this file.

To run the experiment use `kustomize build | kubectl apply -f -`.

## Experiment Lifecycle

For every trial, one pod will come up:

A trial pod named similarly to `jvm-reactors-000-57vk8` which runs the renaissance benchmarking load test on the JVM.

For more information on running, monitoring and maintaining experiments, please refer to our [quickstart](https://docs.stormforge.io/getting-started/quickstart/) and [experiment lifecycle](https://docs.stormforge.io/lifecycle/) documentation.

## Customization

Renaissance has many different benchmarks you can use to tune the JVM for different use cases. For this example we are using the reactors benchmark. You can change the benchmark used in the experiment by simply updating the args passed to the container in the pod template spec. Please note that some of the benchmarks in the renaissance suite give the following warning:

`WARNING: This benchmark provides no result that can be validated. There is no way to check that no silent failure occurred.`

One such example is the philosophers benchmark. We recommend checking the logs of a trial pod for this warning and using benchmarks that do not have silent failures.

For this example, we are using the [Garbage First Garbage Collector (G1GC)](https://docs.oracle.com/javase/9/gctuning/garbage-first-garbage-collector.htm#JSGCT-GUID-F1BE86FA-3EDC-4D4F-BDB4-4B044AD83180) in the docker-entrypoint.sh file. Learn how to include the garbage collection algorithm in your experiment by visiting our [advanced JVM tutorial](https://github.com/thestormforge/examples/tree/master/jvm/advanced).

To add more JAVA_OPTS parameters to tune you can (1) Add any additional optional parameters in the docker-entrypoint.sh file, (2) Create a new image using the Dockerfile to be referenced in the pod template spec and (3) add your new parameters to the experiment spec.

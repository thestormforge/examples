# Elasticsearch Example

## Introduction
[Elasticsearch](https://github.com/elastic/elasticsearch) is a widely used distributed database often used as a search engine or for logging. In this example, we demonstrate how to tune Elasticsearch using the benchmarking tool [Rally](https://esrally.readthedocs.io/en/stable/). Rally provides a variety of datasets, called tracks, that can be used to load test Elasticsearch. For each track there are several challenges, designed to test different workloads. This example shows how to i) use a setupTask to integrate with a Helm chart, ii) tune JVM parameters alongside the Kubernetes resources, and iii) set a maximum length a trial can run before being considered failed.

## Prerequisites

You must have a Kubernetes cluster. We recommend using a cluster with 4 nodes, 40vCPUs (10 on each node) and 80GB of memory (20 on each node). Additionally, you will need a local configured copy of `kubectl` and to initialize StormForge Optimize in your cluster. You can download a binary for your platform from the [installation guide](https://docs.stormforge.io/getting-started/install/) and run `redskyctl init` (while connected to your cluster).

## Example Resources

The resources for this tutorial can be found in the [`/elasticsearch`](https://github.com/thestormforge/examples/tree/master/elasticsearch) directory of the `examples` source repository.

* `experiment.yaml`
: The actual experiment object manifest. In this experiment we vary the number of replicas for the Elasticsearch data nodes, and the CPU and memory assigned to each. The experiment aims to minimize both the time take to run the load tests and the cost of running the Elasticsearch cluster. The integration with Helm is in the setupTask in the trial template spec and in the patches section of the experiment spec. An empty patch tells the controller to wait until this object is ready before starting the trial. The maximum length a trial can run before being considered a failed trial is controlled by setting activeDeadlineSeconds in the pod spec in the trial template.

* `experiment_free_tier.yaml`
: This is a modified experiment file for users of the free tier.  

* `service-account.yaml`
: The manifest for the ServiceAccount used by the setupTask pod.

* `rally-config.yaml`
: The manifest for the ConfigMap used to configure Rally.

To run the experiment use `kubectl` to first create the ConfigMap and ServiceAccount and then create the experiment.

## Experiment Lifecycle

For every trial you will see the following:
1. A setup task pod named similarly to `rally-helm-v2gp8-create-whrfh` that launches the application from the Helm chart.
2. The Elasticsearch cluster consisting of one Deployment called `elasticsearch-client` and two StatefulSets called `elasticsearch-data` and `elasticsearch-master`
3. The trial pod named similarly to `rally-helm-v2gp8-lwmmh` that contains Rally and runs the load tests against the Elasticsearch cluster.
4. A setup task pod named similarly to `rally-helm-v2gp8-delete-whrfh` that cleans up the Helm chart.

For more information on running, monitoring and maintaining experiments, please refer to our [quickstart](https://docs.stormforge.io/getting-started/quickstart/) and [experiment lifecycle](https://docs.stormforge.io/lifecycle/) documentation.

## Customization

Rally provides the ability to customize the dataset and workload. For this example we are optimizing for the `append-fast-with-conflicts` challenge on the `geopoint` dataset. To test the optimization on a different challenge just change the args passed to the container in the trial spec. Rally also provides the ability to write custom tracks specific to your workflow. Finally, you can also pass a variety of track parameters to Rally. Here we use `ingest_percentage:50` to only test on half the dataset (to ensure the trials run in a reasonable time), but a wide variety of other track parameters are supported.

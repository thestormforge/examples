# Terasort

In this example we'll tune the terasort job used by the spark operator.
We'll make use of kudo to install the spark operator to get the operator installed.

## Cluster Sizing

The experiment was built and tested on both 15x r5.xlarge and 15x m5.xlarge.
This means that the parameter spaces for memory and cpu are reflective of the resources available to these nodes, however they can be reduced if running on a smaller cluster.

## Kudo Setup

### Kudo Installation

Follow the installation steps listed in the [kudo.dev docs](https://kudo.dev/docs/#install-kudo-cli).

### Deploy Kudo

After installing kudo, we'll deploy it to our cluster.

```sh
kubectl kudo init --unsafe-self-signed-webhook-ca
```

### Create `spark` namespace

We'll use the `spark` namespace for this experiment.
This will contain the spark operator, terasort SparkApp, spark executor pods, and the trial pod.

```yaml
kubectl create ns spark
```

### Deploy the spark operator

```sh
kubectl kudo install https://github.com/mesosphere/kudo-spark-operator/releases/download/v3.0.0-1.1.0-rc3/spark-3.0.0_1.1.0.tgz -n spark
```

## Terasort Job

The terasort job is defined through a `SparkApplication` custom resource definition.

We will need to fill out the following values:

`spec.arguments`: A list of the uris for the input and output locations ( ex, s3a://mybucket )
`spec.sparkConf.spark.hadoop.fs.s3a.endpoint`:  ex, s3.us-west-2.amazonaws.com
`spec.sparkConf.spark.hadoop.fs.s3a.access.key`: s3 access key
`spec.sparkConf.spark.hadoop.fs.s3a.secret.key`: s3 secret key

## RBAC

We need to create some additional RBAC for this experiment.
We need additional RBAC to support the Prometheus deployment and interact with the SparkApplication CRD.

```sh
kubectl apply -n spark -f additional.yaml
```

## Experiment

Lastly, we'll create the experiment.

```sh
kubectl apply -n spark -f experiment.yaml
```

In this experiment, we'll tune the driver, executor, and spark configuration.

### Driver

The driver configuration deals with setting the cpu and memory for the driver pod.

### Executor

The executor configuration deals with setting the cpu, memory, and number of instances for the executors.

### spark.conf

The spark.conf offers up the most options for configuration.
In this example, we explore the following [configuration options](https://spark.apache.org/docs/latest/configuration.html):
- `spark.reducer.maxSizeInFlight`
- `spark.sql.shuffle.partitions`
- `spark.shuffle.file.buffer`
- `spark.memory.fraction`
- `spark.executor.cores`

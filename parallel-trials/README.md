# Parallel Trials Example

In this example, we demonstrate how to speed up optimization of the postgres example by running multiple trials in parallel. The installation requirements for this example are the same as those for the postgres example. However, you will need a larger cluster that can accommodate running four trials at the same time. When running multiple trials in parallel each trial runs in its own namespace. To control what namespaces the trials run in the namespaces are labeled and a label selector is added to the experiment config in the `namespaceSelector` field.

The application optimized in this example is the same as in the postgres example and the manifests defining the application are in the [examples/postgres](https://github.com/thestormforge/examples/tree/master/postgres) folder. The experiment definition is the same as the postgres example, except that multiple trials are run in parallel. To launch the experiment run

```
kustomize build | kubectl apply -f -
```

This will create four namespaces with labels matching the `namespaceSelector` in the experiment.yaml file, launch the application into each namespace, and then create the experiment. You should see the same lifecycle observed in the postgres example in each individual namespace.

# StormForge PerfTest Test App

This folder contains manifests for deploying the StormForge PerfTest [Test App](https://github.com/stormforger/testapp), also known as [testapp.loadtest.party](http://testapp.loadtest.party), in your Kubernetes cluster.
The Test App is intended as a general purpose target for experimenting with HTTP performance testing. 
Please see the [Test App repository](https://github.com/stormforger/testapp) for more information on the various functionality and endpoints implemented in the Test App.

## Usage

Deploy the testapp to your kubernetes cluster:

```sh
kubectl apply -f ./testapp.yaml
```

If you need your testapp instance to be accessible outside your cluster, you can deploy an ingress:

```sh
kubectl apply -f ./ingress.yaml
```

If you need an Amazon Load Balancer ingress, e.g. for your EKS cluster:

```sh
kubectl apply -f ./alb-ingress.yaml
```

Note: the Amazon Load Balancer ingress requires that you have the [AWS Load Balancer Controller](https://github.com/kubernetes-sigs/aws-load-balancer-controller) properly installed and configured in your EKS cluster. 
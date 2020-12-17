# StormForge optimize experiment using StormForger for the load test

The goal of this recipe is to optimize the voting webapp using StormForger for the load test. This allows to generate much heavier load on the website than with locust. You need to have a [StormForger](stormforger.com) account for that

## Deploy the voting webapp with ingress

In this case the load test resides outside of the cluster. The voting webapp needs to expose an endpoint for in&out cluster traffic.

Run:
`
kustomize build application | kubectl apply -f -
`

Once the ip address for the ingress is available you can test the website by accessing the IP address in a web browser or using curl. Then copy the IP address (or url if you setup a DNS) in `app.yaml` as

```
ingress:
  url: "my-url.example.com"
```

## Create an experiment

Generate an experiment file using
`redskyctl generate experiment -f app.yaml > experiment.yaml`
Create and apply the RBAC permission for the controller to patch the application resources:
`redskyctl generate rbac -f experiment.yaml | kubectl apply -f -`
Launch the experiment
`kubectl apply -f experiment.yaml`

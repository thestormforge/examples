# StormForge optimize experiment using StormForger for the load test

The goal of this recipe is to optimize the voting webapp using [StormForger](https://stormforger.com) for the load test. 
This will allow us to generate much heavier load on the website than with locust. 
You need to have a [StormForger](https://stormforger.com) account for this.

## Deploy the voting webapp with ingress

In this case the load test resides outside of the cluster. The voting webapp needs to expose an endpoint for in&out cluster traffic.

Run:

```terminal
kustomize build application | kubectl apply -f -
```

Once the ip address for the ingress is available you can test the website by accessing the IP address in a web browser or using curl. Then copy the IP address (or url if you setup a DNS) in `app.yaml` as

```yaml
ingress:
  url: "my-url.example.com"
```

## Create an experiment

You need `redskyctl` version 1.11.0 or newer for this example.

Generate an experiment and launch it using `redskyctl generate experiment -f app.yaml | kubectl apply -f -`

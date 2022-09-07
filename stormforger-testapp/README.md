# stormforger-testapp

Simple experiments to optimize the SF PerfTest [testapp](https://github.com/stormforger/testapp/) via Optimize Pro.
NOTE: This is not really useful as an optimization target since the testapp doesn't really have a lot of knobs to tune nor needs a lot of memory/cpu. 
However, it is useful as a test target for experimenting with Opt Pro trial pods for various performance testing tools.

Deploy the testapp to your kubernetes:

```sh
kubectl apply -f ./testapp.yaml
```

If you need an Amazon Load Balancer ingress, e.g. for your `labs` cluster:

```sh
kubectl apply -f ./alb-ingress.yaml
```

If you want to use Prometheus metrics from your trial pods using the Prometheus setup task in your experiment,
you will need some RBAC settings:

```sh
kubectl apply -f stormforge-setup-rbac.yaml
```

## Experiments
- `curl/`: simple experiment using Curl as a trial image.
- `k6/`: experiment using the K6 trial image
- `sf-perftest`: experiment using the v3 StormForge CLI and StormForge PerfTest

### Running an experiment

1. Create an Application in Optimize Pro
2. Create a custom scenario
3. Check the `experiment.yaml` file of your choice and update the `stormforge.io/*` labels according to the names you chose for the app + scenario
4. `kubectl apply -f experiment.yaml`

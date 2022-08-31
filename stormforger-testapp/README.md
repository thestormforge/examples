# stormforger-testapp

Simple experiment to optimize the [testapp](https://github.com/stormforger/testapp/) via Optimize Pro.
NOTE: This is not really useful as the testapp doesn't really have a lot of knobs to tune nor needs a lot of memory/cpu. This is just a showcase.

Deploy the testapp to your kubernetes:

```sh
kubectl apply -f ./testapp.yaml
```

1. Create an Application in Optimize Pro
2. Create a custom scenario
3. Check the `experiment.yaml` file and update the `stormforge.io/*` labels according to the names you chose for the app + scenario
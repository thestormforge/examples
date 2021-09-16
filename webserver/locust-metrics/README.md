# Locust Metrics Example

Locust makes repeated HTTP calls to the voting service of the voting app, thereby simulating user load on the application.
This example shows how to optimize the voting app using the metrics built into Locust. This is useful when tuning an application that does not have metrics yet.

Note that the `experiment.yaml` is written to run the optimization in the default namespace.

## Usage

Run `kustomize build . | kubectl apply -f -` to deploy the voting app in the default namespace.

Once the voting app is ready, launch an experiment using `kubectl apply -f experiment.yaml`

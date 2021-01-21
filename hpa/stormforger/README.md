# Voting Webapp with HPA optimized using Stormforger load test

The goal of this recipe is to optimize the HPA used for the voting webapp.
In this experiment the load test is performed by [Stormforger](stormforger.com). This allows to generate much heavier load on the website and show how carefully tuning HPA along with the deployed application allows to handle such traffic.

## Deploy the voting webapp with ingress

Because the load test resides outside of the cluster, the voting webapp needs to be exposed publicly.

Run:
`kustomize build application | kubectl apply -f -`

Once the IP address for the ingress is available you can test the website by accessing the IP address in a web browser or using curl.
Write

Once the external IP address for the voting-service is ready insert it in the `sf-experiment/experiment.yaml` as the value for the `TARGET` env variable.

## Insert your Stormforger credentials
Insert you Stormforger JWT in `sf-experiment/acessToken`
Replace the value of the `TEST_CASE` env variable with your test case e.g.,`my-organization/my-test-case-name`.


## Create an experiment

Create the RBAC permission
`redskyctl generate rbac -f sf-experiment/experiment.yaml | kubectl apply -f -`
Replace the namespace in `sf-experiment/kustomization.yaml` with the namespace in which you want to deploy.
Launch the experiment
`kustomize build sf-experiment | kubectl apply -f`

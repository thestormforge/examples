# k6 Example

The StormForge Optimize Pro experiment in this folder uses [k6](https://k6.io) to generate load against the Online Boutique test application and track performance metrics through the course of an experimental trial. 

The experiment utilizes a custom trial image based on [the K6 trial image](https://github.com/thestormforge/optimize-trials/tree/main/k6) distributed by StormForge. 
This trial image is used as the basis of each trial job that Optimize Pro runs during an experiment.

The custom trial image uses the K6 trial image as the base layer, and adds the test script and test data to the image for convenience. 
The Dockerfile for the custom trial image is included here.

The k6 test script is given in the `script.js` file. 
This test script simulates users that browses the products in the Online Boutique, with product IDs given in the `products.csv` file. 
These simulated users may randomly elect to add products to their shopping carts and check out.
The `creditcards.csv` file contains the credit card information used to check out.

## Usage

- [Deploy](../application/README.md#usage) the Online Boutique to your cluster. 
- Build the trial image:
  ```sh
  docker build . -t k6-trial image
  ```
- Push the trial image to a registry or repository that is accessible to your Kubernetes cluster:
  ```sh
  docker tag k6-trial-image <target_registry_url>
  docker push <target_registry_url>
  ```
- Update the `experiment.yaml` file to point to your new trial image and Online Boutique URL:
  ```yaml
    spec:
    containers:
    - name: constant-arrival-rate
    image: <target_registry_url>
    env:
    - name: SCRIPT_TARGET
        value: <Internal or external URL to Online Boutique application>
  ```
  The relevant lines can be found under `spec.trialTemplate.spec.jobTemplate.spec.template.spec.containers`.
- Apply the experiment manifest to your cluster:
  ```sh
  kubectl apply -f experiment.yaml
  ```
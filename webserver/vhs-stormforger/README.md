# VHS to Stormforger Demonstration

This example demonstrates a workflow optimizing a web application using a load test that is automatically generated from recorded HTTP traffic. This HTTP traffic is captured in the application to be optimized using [VHS](https://github.com/rename-this/vhs), the load test is generated using StormForge Performance Testing, and the application is optimized using StormForge Optimize. This workflow has three main phases:

1. Record HTTP traffic using VHS.
2. Configure load test generation container and Optimize experiment.
3. Run Optimize experiment with load test.

## Capture Data with VHS

The rest of this writeup will assume that you have recorded some network traffic with VHS, and that the recorded network traffic is stored in a Google Cloud Storage object.
This network traffic should be captured in an environment that is similar or identical to the application that will be optimized.
The [VHS repository](https://github.com/rename-this/vhs) contains a demonstration that shows how to use VHS to capture http traffic in a kubernetes cluster running the voting web app.
It can be find in the subdirectory `[hack/demo](https://github.com/rename-this/vhs/tree/main/hack/demo)`.
This demo deploys the voting web app with a VHS container in each of voting-service pod (4 pods), generates some load with simple script using `curl`, and captures 5 minutes of load to a Google Cloud Storage bucket.


### Notes:

- There is a `vhsdemo` service account on GCS that can be used for this demo, or a new one can be created.
- This demo will produce four output files, one from each voting service pod. We don't currently have a good way to combine these files.
- The `[loadtest.sh](http://loadtest.sh)` script that's in the repository did not work consistently for me. If you encounter the same issue, try increasing the sleep time on line 9 of the script (The "Wait for the container to come up" sleep line).

## Data Post-processing and Load Test Generation

At this point, there should be four objects in the specified GCS bucket. Each object is a gzipped-json file containing the traffic captured by a VHS instance and will be named according to the session-id of the VHS session that captured it. One of these files must be post-processed to create a Stormforger load test. This process has several steps:

- Generate HAR file using VHS
- Generate Stormforger load test using `forge`
- Truncate load test file to manageable size

### Generate HAR file

VHS can read a gzipped JSON file directly from GCS and convert it to a HAR file on your local machine using the following command:

```bash
vhs --input "gcs|gzip|json --output "har|stdout" --gcs-bucket-name <bucket_name> --gcs-object-name <object_name> --debug > harfile.json
```

When this command is run, you should see debugging output on the command line indicating that the GCS object is being read and the HAR file is being generated. Once the process is over and the debug output stops, it should be safe to kill this command with ctrl-c. At this point you should have a valid HAR file `harfile.json`.

### Generate Stormforger load test

Given a valid HAR file, it can be easily converted to a Stormforger test in javascript format using the `forge` command line tool.

```bash
forge har harfile.json > hartest.js
```

When this command successfully completes, you will have a Stormforger test case in a file named `hartest.js`.

### Truncate load test file

There are two options for using a stormforger load test as part of an Optimize experiment. The load test can be saved on the Stormforger web app and specified in the experiment's `app.yaml`. Or, perhaps more conveniently, the load test can be read from your local file system during experiment generation and used directly. However, in order to utilize this approach, the Stormforger js file must be no larger than about 100 kilobytes. Fortunately, there's a handy unix-y command line tool called `truncate` that we can use here. The following command will truncate our load test to 100KB.

```bash
truncate --size=100K hartest.js
```

This will likely result in a JS file that's not syntactically correct, but it should be easy to open the file in your favorite text editor and clean up the syntax errors. Usually this just requires deleting a line or two and adding closing brackets and parentheses. If you have `node` installed on your machine, you can use it to doublecheck the syntax of your file with the following command.

```bash
node --check hartest.js
```

If this command doesn't produce any errors, you should be good to go.

## Optimize with Stormforger load test

Tibo has created an Optimize recipe that uses Stormforger to generate load on the voting web app. It can be found [here in the StormForge Optimize examples repo.](https://github.com/thestormforge/examples/tree/master/webserver/stormforger-metrics) This example can be followed almost verbatim as documented in the repository, with one small additional step. 

First, run `kustomize build application | kubectl apply -f -` to deploy the voting web app and set up an ingress.

Second, after everything is deployed, run `kubectl get ingress` and note the assigned IP address and/or domain name. 

Third, using your favorite editor or command line tool, find and replace the internal cluster IP address in your `hartest.js` file with the ingress IP address noted above. 

Optionally (but it's probably a good idea), edit the cluster size and timing of the StormForger load test in `hartest.js`

Fourth, edit the `app.yaml` to point at the assigned ingress address and the hartest.js file. Also set the StormForger organization that you will be using to run the load test. 

Finally, generate and start the experiment with `redskyctl generate experiment -f app.yaml | kubectl apply -f -`.

You should be able to monitor the progress of the experiment in the Optimize UI and you should be able to see the load test status in the StormForger UI.

That's it at this point! If you've successfully gotten this far, you've turned captured VHS data into a StormForger load test and used it as a source of load for an Optimize experiment.

## Notes

- The load test generated is not necessarily an accurate replay of the captured traffic. It captures the content of requests and responses, but timing is not currently captured by this process. That is, there are no wait states inserted between requests, etc. All of the requests in the load test file will be executed as fast as possible by each load test worker.
- Load/request rate can be adjusted by changing the timing and number of load test workers.

## Create secrets

### StormForge Performance Test token

```terminal
kubectl create secret generic stormforger-service-account --from-literal=accessToken='<access token>'
```

### Google Cloud Storage service account

```terminal
kubectl create secret generic gcs-creds --from-file=service_account.json=<google cloud credentials file>
```

## Create init container configmap

```terminal
kubectl create configmap harutils --from-file har2testcase.sh  --from-file harshrinker.jq
```


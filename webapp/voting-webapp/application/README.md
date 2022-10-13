# Voting Web App Example

## Introduction
A simple distributed application based on the official Docker [voting app](https://github.com/dockersamples/example-voting-app).
This application allows users to vote on "cats" vs. "dogs", and serves the results in a simple web page.

From the Docker example-voting-app documentation:
The application architecture is made of 5 components (see diagram below):
* A front-end web app in [Python](https://github.com/dockersamples/example-voting-app/tree/master/vote) or [ASP.NET Core](https://github.com/dockersamples/example-voting-app/tree/master/vote/dotnet) which lets you vote between two options
* A [Redis](https://hub.docker.com/_/redis/) or [NATS](https://hub.docker.com/_/nats/) queue which collects new votes
* A [.NET Core](https://github.com/dockersamples/example-voting-app/tree/master/worker/src/Worker), [Java](https://github.com/dockersamples/example-voting-app/tree/master/worker/src/main/java/worker) or [.NET Core 2.1](https://github.com/dockersamples/example-voting-app/tree/master/worker/dotnet) worker which consumes votes and stores them in…
* A [Postgres](https://hub.docker.com/_/postgres/) or [TiDB](https://hub.docker.com/r/dockersamples/tidb/tags/) database backed by a Docker volume
* A [Node.js](https://github.com/dockersamples/example-voting-app/tree/master/result) or [ASP.NET Core SignalR](https://github.com/dockersamples/example-voting-app/tree/master/result/dotnet) webapp which shows the results of the voting in real time

![Architecture diagram](architecture.png)

## Resources

The resources in this directory aren't going to launch experiments in StormForge Optimize Pro in and of themselves.
For that, see the [locust experiment](../locust) or the [StormForge Performance Testing experiment](../stormforge-perftest).
The resource manifests in this directory contain the components of the voting webapp itself.
Here is a short description of the included files:

`manifests/kustomization.yaml`
: The input to Kustomize used to build the Kubernetes object manifests for this sample application.

`maniftests/postgres.yaml`
: The manifest for the PostgreSQL database.

`manifests/redis.yaml`
: The manifest for the Redis queue.

`manifests/results-exporter.yaml`
: The manifest for the results exporter.

`manifests/results-service.yaml`
: The manifest for the results service.

`manifests/voting-service.yaml`
: The manifest for the voting service.

`manifests/worker.yaml`
: The manifest for the .NET worker.

`results-exporter/`
: This directory contains files required to run the results exporter. The exporter's role is to expose the throughput metric over HTTP (in contrast to the original websocket implementation in the results service) so that it can be collected by the jsonpath metric collector.
`app.py` contains the exporter application, `requirements.txt` are the python library requirements and `Dockerfile` contains the Docker commands to run the exporter container. There is no need to build the image; the folder is only included for reference.

More information can be found on the [docker example voting app](https://github.com/dockersamples/example-voting-app)docs.

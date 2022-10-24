# StormForge Performance Testing Test App

This folder contains simple experiments to optimize the StormForge Performance Testing [Test App](https://github.com/stormforger/testapp/) via Optimize Pro.

NOTE: This is not really useful as an optimization target since the Test App doesn't really have a lot of knobs to tune nor does it need a lot of memory/cpu. 
However, it is useful as a test target for experimenting with Optimize Pro trial pods for various performance testing tools.

## The Test App

More information on the Test App and manifests to install it in your Kubernetes cluster can be found in the [`application/`](application/) folder.

## Experiments

- [`curl/`](curl/): simple experiment using Curl as a trial image.
- [`jmeter/`](jmeter/): experiment using the StormForge official Jmeter trial image
- [`k6/`](k6/): experiment using the StormForge official K6 trial image
- [`locust/`](locust/): experiment using the StormForge official Locust trial image
- [`sf-perftest/`](sf-perftest/): experiment using the v3 StormForge CLI and StormForge Performance Testing

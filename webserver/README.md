# Webserver optimization

The examples in this folder show how to use StormForge Optimize Pro to optimize a web application.

## Hipster Shop / Online Boutique Examples
The first set of examples is based around the Google Online Boutique ecommerce example application, commonly known as the ["hipster shop"](./hipster-shop).
We provide an [example](./hipster-shop/k6/) that optimizes the `frontend` component of the shop for cost and 95th percentile latency using [k6](https://k6.io/) to generate load and provide metrics during the trials.

## Voting Webapp Examples
The second set of examples uses the Docker [voting-webapp example](./voting-webapp).
We optimize for cost and 95th percentile latency using load generation and metrics provided by two performance test tools:
- [Locust](https://locust.io)
- [StormForge Performance Testing](https://www.stormforge.io/performance-testing/)

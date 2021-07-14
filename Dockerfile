FROM 516273174544.dkr.ecr.us-east-1.amazonaws.com/cicd-tools:latest

MAINTAINER infrastructure@stormforge.io

WORKDIR /examples

COPY voting-webapp/application /examples/voting-webapp/application
COPY elasticsearch /examples/elasticsearch
COPY .ci /examples/.ci

RUN kubectl config set-context ci --namespace=default && \
    kubectl config use-context ci

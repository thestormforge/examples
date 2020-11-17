#!/bin/bash

set -xe

curl -s -LO https://github.com/redskyops/redskyops-controller/releases/download/v1.6.5/redskyctl-linux-amd64.tar.gz
tar -xf redskyctl-linux-amd64.tar.gz
chmod 755 redskyctl
sudo mv redskyctl /usr/local/bin
redskyctl init --wait

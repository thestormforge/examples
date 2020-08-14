#!/bin/bash

set -xe

[[ -f /usr/local/bin/kustomize ]] && exit 0

echo "Install kustomize"
curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | \
  bash
sudo mv ./kustomize /usr/local/bin/kustomize

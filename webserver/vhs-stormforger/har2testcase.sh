#!/bin/bash -x

apt update && \
apt install -y --no-install-recommends \
ca-certificates \
curl \
sed \
jq 

curl -LO https://github.com/rename-this/vhs/releases/download/v0.1.0-alpha/vhs_0.1.0-alpha_linux_amd64.deb
apt install -y ./vhs_0.1.0-alpha_linux_amd64.deb

curl -Lo forge.tar.gz https://app.stormforger.com/download/cli/linux && \
tar -C /usr/local/bin -xf forge.tar.gz


# timeout 60s vhs --input "gcs|gzip|json" --output "har|stdout" --gcs-bucket-name vhsdemo --gcs-object-name 1lnFKPQEk4a9d9BJBfhPWhiL3hk --debug --source-duration 30s > /tmp/har.json
timeout 60s vhs --input "gcs|gzip|json" --output "har|stdout" --gcs-bucket-name ${GCS_BUCKET} --gcs-object-name ${GCS_OBJECT} --debug --source-duration 30s > /tmp/har.json

cat /tmp/har.json | \
jq -c -f /har/harshrinker.jq --arg limit ${HAR_LIMIT} | \
forge har - | \
sed -e "s/[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}/${INGRESS_ADDRESS}/g" | \
sed 's/preflight/tiny/g' \
> ${TEST_CASE_FILE}

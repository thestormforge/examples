FROM ghcr.io/thestormforge/optimize-trials:sha-d48b6c5-k6

COPY script.js creditcards.csv products.csv /scripts/

# Ensure that our script can find our data files in the container
ENV SCRIPT_PRODUCTS_FILE "/scripts/products.csv"
ENV SCRIPT_CREDITCARDS_FILE "/scripts/creditcards.csv"

# Optionally configure the target of the k6 script here:
# ENV SCRIPT_TARGET "http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/"

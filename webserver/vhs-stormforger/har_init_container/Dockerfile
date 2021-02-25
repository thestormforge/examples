FROM stormforger/cli

USER root
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    sed \
    jq \
    && rm -rf /var/lib/apt/lists/*
COPY har2testcase.sh /usr/local/bin
COPY harshrinker.jq /har

#Need a volume mounted here?

ENTRYPOINT [ "har2testcase.sh" ]

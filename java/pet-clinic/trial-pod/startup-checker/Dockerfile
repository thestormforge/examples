FROM thestormforge/setuptools:2.1.1

USER root
RUN apk add --no-cache curl jq
COPY entrypoint.sh /usr/local/bin/

#USER 65534

ENTRYPOINT ["entrypoint.sh"]

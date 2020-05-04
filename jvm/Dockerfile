FROM openjdk:8u242-jdk-slim
ADD https://github.com/renaissance-benchmarks/renaissance/releases/download/v0.10.0/renaissance-gpl-0.10.0.jar /opt/renaissance/lib/
COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

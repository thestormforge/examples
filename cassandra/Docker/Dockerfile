FROM ubuntu:bionic

RUN apt-get update && apt-get --assume-yes install curl gnupg2 wget

# Add Cassandra Repo 4.x
RUN echo "deb http://downloads.apache.org/cassandra/debian 311x main" | tee -a /etc/apt/sources.list.d/cassandra.sources.list
RUN curl https://downloads.apache.org/cassandra/KEYS | apt-key add -

# Install Cassandra package
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get --assume-yes install cassandra cassandra-tools

COPY entrypoint.sh /usr/local/bin/
ENTRYPOINT ["entrypoint.sh"]

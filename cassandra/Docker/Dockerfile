FROM ubuntu:bionic

# Install curl, wget, gnupg2
#RUN apt-get update && apt-get --assume-yes install curl gnupg2 wget
RUN apt-get update && apt-get --assume-yes install curl gnupg2 wget

# Add Cassandra repo 3.11
#RUN echo "deb http://www.apache.org/dist/cassandra/debian 311x main" | tee -a /etc/apt/sources.list.d/cassandra.sources.list
#RUN apt-key adv --keyserver pool.sks-keyservers.net --recv-key A278B781FE4B2BDA
#RUN wget https://www.apache.org/dist/cassandra/KEYS && apt-key add KEYS 

# Add Cassandra Repo 4.x
RUN echo "deb http://downloads.apache.org/cassandra/debian 311x main" | tee -a /etc/apt/sources.list.d/cassandra.sources.list
RUN curl https://downloads.apache.org/cassandra/KEYS | apt-key add -

# Install Cassandra package
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get --assume-yes install cassandra cassandra-tools

COPY entrypoint.sh /usr/local/bin/
ENTRYPOINT ["entrypoint.sh"]

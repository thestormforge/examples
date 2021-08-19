#!/bin/bash
set -e

#cassandra-stress write n=1000000 -rate threads=100 -node cassandra &
#wait $!

#cassandra-stress mixed n=100000 -rate threads=100 -node cassandra &
#wait

#cqlsh --request-timeout=60 -e "DROP KEYSPACE keyspace1;" cassandra || true
#wait

>&1
cqlsh --request-timeout=60 -e "DESCRIBE KEYSPACE keyspace1;" cassandra || true

cqlsh --request-timeout=60 -e "DROP KEYSPACE keyspace1;" cassandra || true

cassandra-stress write n=100000 -rate threads=10 -node cassandra

cassandra-stress mixed n=100000 -rate threads=10 -node cassandra

#if [ $? -eq 0 ]
#then
#  echo "Successfully completed ctress test"
#else
#  echo "Could not finish stress test successfully" >&2
#fi

#cqlsh --request-timeout=60 -e "DROP KEYSPACE keyspace1;" cassandra || true

#if [ $? -eq 0 ]
#then
#  echo "Successfully dropped keyspace keyspace1"
#else
#  echo "Could not drop keyspace keyspace1" >&2
#fi

#cqlsh --request-timeout=60 -e "DROP KEYSPACE system;" cassandra || true

#if [ $? -eq 0 ]
#then
#  echo "Successfully dropped system keyspace"
#else
#  echo "Could not drop system keyspace" >&2
#fi

## NOTES - rm -rf /cassandra_data/data/system/peers*/*
## DO AS INIT CONTAINER ON STS
## $env:JVM_OPTS="$JVM_OPTS -Dcassandra.load_ring_state=false"
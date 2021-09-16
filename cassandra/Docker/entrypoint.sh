#!/bin/bash
set -ex

>&1
cqlsh --request-timeout=60 -e "DESCRIBE KEYSPACE keyspace1;" cassandra || true

cqlsh --request-timeout=60 -e "DROP KEYSPACE keyspace1;" cassandra || true

cassandra-stress write n=100000 -rate threads=10 -node cassandra

cassandra-stress mixed n=100000 -rate threads=10 -node cassandra

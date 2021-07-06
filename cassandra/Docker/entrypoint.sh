#!/bin/bash

cassandra-stress write n=1000000 -rate threads=100 -node cassandra &
wait $!

#cassandra-stress read -node cassandra &
#wait $!

cassandra-stress mixed n=100000 -rate threads=100 -node cassandra &
wait $!

cqlsh --request-timeout=60 -e "DROP KEYSPACE keyspace1;" cassandra || true
wait

echo "Completed"
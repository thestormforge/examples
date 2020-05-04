curl locust:8089/stats/reset
curl -X POST -F 'locust_count=200' -F 'hatch_rate=20' locust:8089/swarm
sleep 300
curl locust:8089/stop

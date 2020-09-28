import os
import sys
import time
import logging

import requests

logging.basicConfig(level=logging.INFO)

LOCUST_HOST = os.getenv("LOCUST_HOST", "http://localhost:8089")
N_CLIENTS = os.getenv("N_CLIENTS", "200")
HATCH_RATE = os.getenv("HATCH_RATE", "10")
RUN_TIME = os.getenv("RUN_TIME", "300")
MAX_LATENCY = os.getenv("MAX_LATENCY", "1000")
MAX_ERROR_RATE = os.getenv("MAX_ERROR_RATE", "2")


response = requests.get(LOCUST_HOST + "/stats/reset")
assert response.status_code == 200

# Cycle one
logging.info("First cycle")
requests.post(LOCUST_HOST + "/swarm",
              data={"locust_count": N_CLIENTS,
                    "hatch_rate": HATCH_RATE})
time.sleep(int(RUN_TIME))


# Stop
logging.info("stop swarm")
stop = requests.get(LOCUST_HOST + "/stop")
assert stop.status_code == 200

# Get stats
logging.info("get stats")
stats = requests.get(LOCUST_HOST + "/stats/requests").json()

p95_lat = stats["stats"][0]["avg_response_time"]
errors = stats["stats"][0]["num_failures"]/stats["stats"][0]["num_requests"]*100
if p95_lat > float(MAX_LATENCY):
    logging.info("fail trial")
    sys.exit(1)
if errors > float(MAX_ERROR_RATE):
    logging.info("fail trial")
    sys.exit(1)
logging.info("max latency = {}, errors = {}".format(p95_lat, errors))

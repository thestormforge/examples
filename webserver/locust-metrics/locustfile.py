import os

from uuid import uuid4
import random
from locust import HttpUser, task, between


CAT_FRACTION = os.getenv("CAT_FRACTION", 0.75)


class MyUser(HttpUser):
    wait_time = between(5, 10)
    @task
    def vote(self):
        voter_id = uuid4().hex
        vote = "a" if (random.uniform(0, 1) < CAT_FRACTION) else "b"
        self.client.post("/",
                         cookies={"voter_id": voter_id},
                         data={"vote": vote})

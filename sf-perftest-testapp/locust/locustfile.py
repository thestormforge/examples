from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(1, 5)
    @task(1)
    def index(self):
        self.client.get("/")
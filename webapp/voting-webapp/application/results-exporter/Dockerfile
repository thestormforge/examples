FROM python:3.11-alpine

COPY requirements.txt /

RUN apk add postgresql-dev gcc python3-dev musl-dev && \
    pip3 install -r /requirements.txt

COPY . /

env FLASK_APP /app.py

ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]

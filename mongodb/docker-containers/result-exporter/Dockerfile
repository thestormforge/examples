FROM python:3.7-alpine

COPY . /

RUN apk add gcc python3-dev musl-dev curl wget && \
    pip3 install -r /requirements.txt

ENV FLASK_APP /app.py

ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]

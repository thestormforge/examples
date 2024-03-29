import os

import psycopg2
from flask import Flask, jsonify


DB_HOST = os.getenv("DB_HOST", "localhost")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", None)
DB_DATABASE = os.getenv("DB_DATABASE", None)

app = Flask(__name__)


def _count_votes():
    conn = psycopg2.connect(host=DB_HOST, user=DB_USER, password=DB_PASSWORD, database=DB_DATABASE)
    cur = conn.cursor()
    cur.execute("SELECT COUNT(id) from votes")
    total_votes = cur.fetchone()[0]
    cur.close()
    conn.close()
    return total_votes

@app.route("/")
def status():
    return "ok", 200

@app.route("/metrics")
def metrics():
    total_votes = _count_votes()
    results = {"total": total_votes}
    return jsonify(results)


if __name__ == "__main__":
    app.run()

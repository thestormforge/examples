import os

from flask import Flask, request, jsonify

TRACKER = {}
TRACKER["fullresults"] = "{nothing yet}"

app = Flask(__name__)

@app.route("/")
def status():
    return "ok", 200

@app.route("/report", methods=["POST"])
def report_results():
    TRACKER["fullresults"] = request.json
    return "", 204

@app.route("/reset", methods=["POST","GET"])
def reset_results():
    TRACKER["fullresults"] = "{nothing yet}"
    return "", 204

@app.route("/payload")
def payload():
    results = TRACKER["fullresults"]
    return results

if __name__ == "__main__":
    app.run()

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)



@app.route('/', methods=['POST'])
def apiv2():
    version = "api_version=v2"
    return version


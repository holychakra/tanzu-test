from flask import Flask, request

app = Flask(__name__)



@app.route('/', methods=['POST'])
def apiv1():
    version = "api_version=v1"
    return version                                    

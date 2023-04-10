FROM python:3.7.7-slim

WORKDIR /app

ADD . /app

RUN pip install flask
RUN pip install flask_cors

CMD flask run --host=0.0.0.0

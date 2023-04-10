FROM node:16

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
RUN apt update -y
RUN apt install dnsutils -y
RUN apt install vim -y

COPY . /usr/src/app

EXPOSE 3000
CMD [ "node", "./app.js" ]

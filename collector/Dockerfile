FROM node:14
LABEL maintainer="Daniel"

COPY package*.json /app

RUN npm install

COPY ./app /app

WORKDIR /app

EXPOSE 3000

RUN npm start


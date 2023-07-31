FROM node:alpine
LABEL maintainer="Daniel"

WORKDIR /app

COPY ./app /app

RUN npm install

EXPOSE 3000 

CMD ["npm", "start"]


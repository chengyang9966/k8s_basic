FROM node:alpine 

WORKDIR /usr/src/app

COPY /query/package*.json ./
RUN npm ci
COPY ./query ./
COPY helper /usr/src/helper

CMD ["npm","start"]

EXPOSE 4002

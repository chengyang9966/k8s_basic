FROM node:alpine 

WORKDIR /usr/src/app

COPY /comment/package*.json ./
RUN npm ci
COPY ./comment ./
COPY helper /usr/src/helper

CMD ["npm","start"]

EXPOSE 4001

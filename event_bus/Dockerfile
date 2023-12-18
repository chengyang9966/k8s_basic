FROM node:alpine 

WORKDIR /usr/src/app

COPY /event_bus/package*.json ./
RUN npm ci
COPY ./event_bus ./
COPY helper /usr/src/helper

CMD ["npm","start"]

EXPOSE 4005

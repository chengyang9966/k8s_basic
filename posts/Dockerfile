FROM node:alpine 

WORKDIR /usr/src/app

COPY /posts/package*.json ./
RUN npm ci
COPY ./posts ./
COPY helper /usr/src/helper

CMD ["npm","start"]

EXPOSE 4000

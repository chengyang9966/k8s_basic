FROM node:alpine 

WORKDIR /usr/src/app

COPY /moderation/package*.json ./
RUN npm ci
COPY ./moderation ./
COPY helper /usr/src/helper

CMD ["npm","start"]

EXPOSE 4003

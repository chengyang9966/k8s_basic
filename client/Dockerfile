FROM node:alpine 

# Add the following lines
ENV CI=true
ENV WDS_SOCKET_PORT=0


WORKDIR /usr/src/app

COPY /client/package*.json ./
RUN npm ci
COPY ./client ./

CMD ["npm","start"]


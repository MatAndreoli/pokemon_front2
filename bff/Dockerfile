FROM node:16.18.0-alpine

WORKDIR /usr/app

COPY bff/package*.json ./
RUN npm i

COPY bff/ ./

RUN npm run clean

EXPOSE 3000

CMD [ "npm", "start" ]

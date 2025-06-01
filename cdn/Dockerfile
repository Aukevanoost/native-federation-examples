FROM node:23.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY server.js ./
COPY public ./public

RUN npm install

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "node", "server.js" ]
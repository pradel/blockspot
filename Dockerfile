FROM node:10-alpine

WORKDIR /app

ADD package.json yarn.lock ./

RUN yarn install --pure-lockfile

ADD . ./

ENV PORT=3000

EXPOSE 3000
CMD yarn dev

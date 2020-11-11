# specify the node base image with your desired version node:<version>
FROM node:11

COPY . /home/node/app
WORKDIR /home/node/app
ENV NODE_ENV production
CMD yarn install && yarn build && yarn start

EXPOSE 3000

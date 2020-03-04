FROM node:8.12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
COPY yarn.lock ./

RUN yarn

EXPOSE 8080
CMD [ "yarn", "start" ]
FROM node:alpine

WORKDIR /src/web
ENV PATH /src/web/node_modeuls/.bin:$PATH

COPY package.json /src/web/package.json

RUN npm install
RUN npm install -g @angular/cli

COPY . /src/web

CMD ng serve

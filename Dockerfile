FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

COPY package*.json ./

RUN npm install

RUN npm install nodemon

EXPOSE 3001

CMD [ "npm", "run", "seedDB" ]

CMD [ "npm", "react-dev" ]

CMD [ "npm", "start" ]

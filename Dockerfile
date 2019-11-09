FROM node:10


WORKDIR /app

COPY . /app

RUN npm install

CMD HTTPS=true&&npm start

EXPOSE 3000
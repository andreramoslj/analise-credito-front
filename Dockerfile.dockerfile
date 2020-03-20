FROM node
MAINTAINER Andre RAmos
COPY . /var/front
WORKDIR  /var/front
RUN npm install
ENTRYPOINT npm start
EXPOSE 4200

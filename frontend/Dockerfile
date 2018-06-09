FROM node
RUN mkdir -p /usr/www
WORKDIR /usr/www
COPY ./package.json /usr/www/
RUN npm install
COPY ./ /usr/www
RUN mkdir /usr/www/public
EXPOSE 3000
CMD [ "npm", "start" ]

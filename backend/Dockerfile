FROM node
ENV DEBUG reaccounts
RUN mkdir -p /usr/www
WORKDIR /usr/www
COPY ./package.json /usr/www/
RUN npm install -g babel-cli
RUN npm install
COPY ./ /usr/www
EXPOSE 3000
CMD [ "npm", "start" ]

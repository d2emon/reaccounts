FROM node
RUN mkdir -p /usr/www
WORKDIR /usr/www
COPY ./backend/package.json /usr/www/
RUN npm install
COPY ./backend /usr/www
EXPOSE 3000
CMD [ "npm", "start" ]

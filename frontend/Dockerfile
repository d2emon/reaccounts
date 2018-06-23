FROM node

ENV NODE_ENV production
RUN mkdir -p /usr/www
WORKDIR /usr/www

COPY ./ /usr/www

COPY ./package.json /usr/www/
RUN npm install

EXPOSE 3000
# CMD ["npm", "run", "dev"]
CMD ["npm", "start"]

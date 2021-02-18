FROM node:12
WORKDIR /app
ADD . /app
RUN npm install
RUN npm rebuild node-sass
EXPOSE 3000
CMD npm start

FROM node:12
WORKDIR /app
ADD . /app
RUN npm install
RUN npm rebuild node-sass
EXPOSE 3000
CMD npm start
# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
#FROM node:8.11.2
#
## The base node image sets a very verbose log level.
#ENV NPM_CONFIG_LOGLEVEL warn
#
## Copy all local files into the image.
#COPY . .
#
## install
#RUN npm install
#RUN npm rebuild node-sass
#RUN npm install -g serve
#
## Build for production.
#RUN npm run build
#
## Set the command to start the node server.
#CMD serve -s dist
#
## Tell Docker about the port we'll run on.
#EXPOSE 5000

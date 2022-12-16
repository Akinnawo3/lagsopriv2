# Stage 1
FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



## Stage 1 - the build process
#FROM node:12 as build-deps
#WORKDIR /usr/src/app
#COPY package.json yarn.lock ./
#RUN yarn
#COPY . ./
#RUN yarn build
#
## Stage 2 - the production environment
#FROM nginx:1.12-alpine
#COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]




#FROM node:12
#WORKDIR /app
#ADD . /app
#RUN npm install
#RUN npm rebuild node-sass
#EXPOSE 3000
#CMD npm start







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





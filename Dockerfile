# docker build -t iem/node-js-ts:0.0.1 .
# docker run -p 8080:8080 iem/node-js-ts:0.0.1 
FROM node:12.18.2-alpine3.9
# Env
ENV TIME_ZONE=Asia/Bangkok
ENV ENV_NAME production
ENV EGG_SERVER_ENV production
ENV NODE_ENV production
ENV NODE_CONFIG_ENV production
# Set the timezone in docker
COPY Bangkok /etc/localtime
RUN echo Asia/Bangkok > /etc/timezone
# Create Directory for the Container
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript
RUN npm run tsc
# Start
CMD [ "npm", "run", "start:prod" ]
EXPOSE 8080
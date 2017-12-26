# Linux OS
FROM ubuntu:16.04

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update

# Utilities
RUN apt-get install -y vim wget curl apt-transport-https git unzip sudo apt-utils

# Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN sudo apt-get install -y yarn

# Node
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# Install dependencies
ADD package.json yarn.lock /app/
RUN cd /app && \
    yarn install

# Build
ADD . /app
RUN cd /app && \
    yarn run build

FROM node:16
WORKDIR /stabox
COPY . .
RUN npm install
RUN npm run build:all
#CMD cd ./dist/stabox
#CMD node main.js
# CMD mysql -e "CREATE DATABASE stabox"
# CMD node main.js
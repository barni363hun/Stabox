FROM node:16 as builder
WORKDIR /stabox
COPY . .
RUN npm install
RUN npm run build:all


FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /stabox/dist/stabox ./
RUN npm install
EXPOSE 8080
CMD [ "node", "main.js" ]


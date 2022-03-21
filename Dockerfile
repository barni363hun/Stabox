FROM node:16 as builder
WORKDIR /stabox
COPY . .
RUN sed -i 's|base href="/"|base href="/stabox/"|g' /stabox/apps/stabox-frontend/src/index.html
RUN npm install
RUN npm run build:all


FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /stabox/dist/stabox ./
RUN npm install
EXPOSE 8080
CMD [ "node", "main.js" ]


FROM node:16 as builder
WORKDIR /stabox
COPY . .
RUN npm install
RUN npm run build:all


FROM node:16-alpine
WORKDIR /app
COPY --from=builder /stabox ./
CMD ["npm", "run", "start:prod"]
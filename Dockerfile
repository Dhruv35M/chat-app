FROM node:alpine
COPY . /app
WORKDIR /app
CMD npm run build && npm start

#1
FROM node:16-alpine
#2
WORKDIR /app
#3
COPY package.json .
COPY yarn.lock .
#4
RUN yarn install
#5
COPY . .
#6
EXPOSE 3000
#7
CMD [ "yarn", "dev" ]
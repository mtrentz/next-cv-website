FROM node:14 as build
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.13-alpine
COPY --from=build /app/out /var/www/html
# --------------------------
# | Build target           |
# --------------------------
FROM node:12.16.1-alpine

WORKDIR /home/schedule

COPY package*.json ./
RUN npm install

COPY angular.json tsconfig.json tsconfig.app.json ionic.config.json tslint.json ./
COPY src ./src

COPY fetchLaunches.ts ./
RUN node fetchLaunches.ts

RUN npm run ng run app:build:production && \
    npm prune --production

# --------------------------
# | Production target      |
# --------------------------
FROM nginx

COPY --from=0 /home/schedule/www /usr/share/nginx/html


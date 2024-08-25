FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build devs/create-card

FROM node:18-alpine AS production

ARG node_env=production
ENV NODE_ENV=${node_env}

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/prisma.db/generated/clientUsers/libquery_engine-linux-musl-openssl-3.0.x.so.node ./prisma.db/generated/clientUsers/libquery_engine-linux-musl-openssl-3.0.x.so.node
COPY --from=build /usr/src/app/prisma.db/generated/clientDevs/libquery_engine-linux-musl-openssl-3.0.x.so.node ./prisma.db/generated/clientDevs/libquery_engine-linux-musl-openssl-3.0.x.so.node
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist


EXPOSE 3101

CMD ["node", "dist/apps/devs/create-card/main"]

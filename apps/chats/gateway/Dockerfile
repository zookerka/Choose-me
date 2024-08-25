FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build chats/gateway

FROM node:18-alpine AS production

ARG node_env=production
ENV NODE_ENV=${node_env}

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/prisma.db/generated/clientChats/libquery_engine-linux-musl-openssl-3.0.x.so.node ./prisma.db/generated/clientChats/libquery_engine-linux-musl-openssl-3.0.x.so.node
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist


EXPOSE 3901

CMD ["node", "dist/chats/gateway/main"]

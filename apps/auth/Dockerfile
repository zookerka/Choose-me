FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build auth

FROM node:18-alpine AS production

ARG node_env=production

ENV NODE_ENV=${node_env}

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules

COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3001

CMD ["node", "dist/apps/auth/main"]

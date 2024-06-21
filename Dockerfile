FROM node:20 as base

WORKDIR /app

COPY package*.json /app/

RUN yarn

COPY . .

FROM base as local
COPY ./.env.local /app/.env

CMD ["yarn", "develop"]


FROM base as dev
COPY ./.env.dev /app/.env

CMD ["yarn", "develop"]


FROM base as prod
COPY ./.env.prod /app/.env

RUN yarn build

CMD ["yarn", "start"]

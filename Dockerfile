# Build client
FROM node:16.14 as client-builder

WORKDIR /app

COPY ./client ./

RUN yarn --frozen-lockfile --non-interactive

RUN yarn build

# Build server

FROM node:16.14 as server-builder

WORKDIR /app

COPY ./server ./

RUN yarn --frozen-lockfile --non-interactive

RUN yarn build

# Build deployment
FROM node:16.14

WORKDIR /app

COPY --from=client-builder /app/dist /app/client
COPY --from=server-builder /app/dist/index.js /app

ENV PORT=8000
ENV NODE_ENV="production"

CMD ["node", "index.js"]

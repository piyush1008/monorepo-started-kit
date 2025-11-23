FROM oven/bun:1

WORKDIR /app

COPY ./bun.lock ./bun.lock

COPY ./turbo.json ./turbo.json

COPY ./package.json ./package.json

COPY ./packages ./packages

COPY ./apps/ws-server ./apps/ws-server

RUN bun install

EXPOSE 8081

CMD ["bun", "run", "start:ws"]
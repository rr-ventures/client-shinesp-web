# syntax=docker/dockerfile:1

FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

# ─────────────────────────────────────────
# Builder
# ─────────────────────────────────────────
FROM base AS builder
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ─────────────────────────────────────────
# Runner: standalone Next.js + nginx
# ─────────────────────────────────────────
FROM node:20-alpine AS runner
RUN apk add --no-cache nginx

WORKDIR /app

COPY --from=builder /build/.next/standalone ./
COPY --from=builder /build/.next/static      ./.next/static
COPY --from=builder /build/public            ./public

COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

EXPOSE 3000

CMD ["/app/start.sh"]

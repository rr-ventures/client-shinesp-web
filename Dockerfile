# syntax=docker/dockerfile:1
# Multi-stage build: 4 Next.js apps compiled in parallel, served via nginx

FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

# ─────────────────────────────────────────
# Builder: v0
# ─────────────────────────────────────────
FROM base AS builder-v0
WORKDIR /build
COPY v0/package.json ./
RUN npm install
COPY v0/ .
RUN npm run build

# ─────────────────────────────────────────
# Builder: v1
# ─────────────────────────────────────────
FROM base AS builder-v1
WORKDIR /build
COPY v1/package.json ./
RUN npm install
COPY v1/ .
RUN npm run build

# ─────────────────────────────────────────
# Builder: v2
# ─────────────────────────────────────────
FROM base AS builder-v2
WORKDIR /build
COPY v2/package.json ./
RUN npm install
COPY v2/ .
RUN npm run build

# ─────────────────────────────────────────
# Builder: v3
# ─────────────────────────────────────────
FROM base AS builder-v3
WORKDIR /build
COPY v3/package.json ./
RUN npm install
COPY v3/ .
RUN npm run build

# ─────────────────────────────────────────
# Runner: single container, all 4 apps + nginx
# ─────────────────────────────────────────
FROM node:20-alpine AS runner
RUN apk add --no-cache nginx

WORKDIR /app

# v0 — standalone server + static assets + public files
COPY --from=builder-v0 /build/.next/standalone ./v0/
COPY --from=builder-v0 /build/.next/static      ./v0/.next/static
COPY --from=builder-v0 /build/public            ./v0/public

# v1
COPY --from=builder-v1 /build/.next/standalone ./v1/
COPY --from=builder-v1 /build/.next/static      ./v1/.next/static
COPY --from=builder-v1 /build/public            ./v1/public

# v2
COPY --from=builder-v2 /build/.next/standalone ./v2/
COPY --from=builder-v2 /build/.next/static      ./v2/.next/static
COPY --from=builder-v2 /build/public            ./v2/public

# v3
COPY --from=builder-v3 /build/.next/standalone ./v3/
COPY --from=builder-v3 /build/.next/static      ./v3/.next/static
COPY --from=builder-v3 /build/public            ./v3/public

# Root landing page (served by nginx at /)
COPY public/ /app/root-public/

# nginx config template and start script
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

EXPOSE 3000

CMD ["/app/start.sh"]

#!/bin/sh
set -e

# Railway sets PORT dynamically; default to 3000
NGINX_PORT="${PORT:-3000}"

echo "Starting Shine Speech Pathology — multi-version deployment"
echo "Nginx will listen on port $NGINX_PORT"

# Generate nginx config by substituting the port placeholder
sed "s/NGINX_PORT/$NGINX_PORT/g" /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Start each Next.js app on a dedicated internal port
echo "Starting v0 on port 3001..."
(cd /app/v0 && PORT=3001 HOSTNAME=127.0.0.1 node server.js) &

echo "Starting v1 on port 3002..."
(cd /app/v1 && PORT=3002 HOSTNAME=127.0.0.1 node server.js) &

echo "Starting v2 on port 3003..."
(cd /app/v2 && PORT=3003 HOSTNAME=127.0.0.1 node server.js) &

echo "Starting v3 on port 3004..."
(cd /app/v3 && PORT=3004 HOSTNAME=127.0.0.1 node server.js) &

# Give Next.js apps time to boot before nginx starts accepting traffic
echo "Waiting for Next.js apps to boot..."
sleep 15

echo "Starting nginx on port $NGINX_PORT..."
exec nginx -g "daemon off;"

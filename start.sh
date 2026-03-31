#!/bin/sh
set -e

# Railway sets PORT dynamically; default to 3000
NGINX_PORT="${PORT:-3000}"

echo "Starting Shine Speech Pathology"
echo "Nginx will listen on port $NGINX_PORT"

# Generate nginx config by substituting the port placeholder
sed "s/NGINX_PORT/$NGINX_PORT/g" /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Start Next.js standalone server on internal port 3001
echo "Starting Next.js on port 3001..."
(cd /app && PORT=3001 HOSTNAME=127.0.0.1 node server.js) &

# Give Next.js time to boot before nginx starts accepting traffic
echo "Waiting for Next.js to boot..."
sleep 5

echo "Starting nginx on port $NGINX_PORT..."
exec nginx -g "daemon off;"

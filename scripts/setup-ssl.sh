#!/bin/bash
# Run once on the server to issue the Let's Encrypt certificate
# Usage: ./scripts/setup-ssl.sh your@email.com

EMAIL=${1:-"admin@neurogenetics.my"}
DOMAIN="neurogenetics.my"

echo "▶ Starting nginx (HTTP only) for ACME challenge..."
docker compose up -d nginx

echo "▶ Issuing Let's Encrypt certificate for $DOMAIN..."
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path /var/www/certbot \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  -d "$DOMAIN" \
  -d "www.$DOMAIN"

echo "▶ Reloading nginx with SSL..."
docker compose restart nginx

echo "✓ SSL certificate issued. Site is live at https://$DOMAIN"

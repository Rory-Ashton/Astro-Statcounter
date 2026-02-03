#!/bin/bash
set -e

cd /var/www/html/astroStatcounter
TARBALL=$(npm pack)

WDIR="astro-test-site"
cd /var/www/html/$WDIR
npm remove @statcounter/astro || true
rm -rf node_modules/@statcounter/astro

npm install /var/www/html/astroStatcounter/$TARBALL

npm run build
#pm2 restart astro
echo "NO SERVER COMMAND -- RUN MANUALLY"
echo $WDIR


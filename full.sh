#!/bin/bash
set -e

cd /var/www/html/astroStatcounter
TARBALL=$(npm pack)

cd /var/www/html/astro
npm remove @statcounter/astro || true
rm -rf node_modules/@statcounter/astro

npm install /var/www/html/astroStatcounter/$TARBALL

npm run build
pm2 restart astro

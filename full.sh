#!/bin/bash
set -e

cd /var/www/html/astroStatcounter
rm -f *.tgz
npm pack

cd /var/www/html/astro
npm remove @statcounter/astro
rm -f package-lock.json
rm -rf node_modules
npm cache clean --force
npm install
npm install /var/www/html/astroStatcounter/statcounter-astro-0.1.2.tgz --force

rm -rf node_modules/.vite .astro dist
npm run build
pm2 restart astro

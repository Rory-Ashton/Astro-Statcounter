#!/bin/bash
set -e

cd /var/www/html/astroStatcounter
npm pack

cd /var/www/html/astro
npm remove @statcounter/astro
npm install /var/www/html/astroStatcounter/statcounter-astro-0.1.2.tgz

npm run build
pm2 restart astro

#!/bin/bash
clear
inotifywait -m -r -e modify,create,delete --format '%w%f' src | while read file
do
  echo "Changed: $file"
  npx eslint $1
done


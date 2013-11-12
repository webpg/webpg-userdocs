#!/bin/bash

if [ "$1" != "" ]; then
    OUTDIR=$1
else
    OUTDIR="output"
fi

jsduck -v --config config.json --output $OUTDIR && cp -rv patch/* $OUTDIR

# Replace any occurrences of the non-https video player
find $OUTDIR/. -name "*.htm" -o -name "*.html" -o -name "*.js" | xargs \
  sed -i 's/http:\/\/player\.vimeo/https:\/\/player\.vimeo/g'

#!/bin/bash

if [ "$1" != "" ]; then
    OUTDIR=$1
else
    OUTDIR="output"
fi

jsduck -v --config config.json --output $OUTDIR && cp -rv patch/* $OUTDIR

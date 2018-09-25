#!/bin/bash
cd "$(dirname "$0")"

yarn run build
git add build
git commit -m "Push site"
git push origin `git subtree split --prefix build master`:gh-pages --force

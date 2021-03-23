#!/bin/bash
cd "$(dirname "$0")"

yarn run build
git add build
git commit -m "Push site"
git push origin `git subtree split --prefix build canon`:gh-pages --force
git rm -r ./build
git reset HEAD@{1}

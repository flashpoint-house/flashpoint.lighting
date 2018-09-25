#!/bin/bash
cd "$(dirname "$0")"

yarn run build
git subtree push --prefix dist origin gh-pages

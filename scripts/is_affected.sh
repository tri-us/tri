#!/usr/bin/env bash

function check_is_affected {
  APP=$1

  NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nrwl/workspace'])")
  TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

  npm i -D @nrwl/workspace@$NX_VERSION typescript@$TS_VERSION --prefer-offline

  IS_AFFECTED=$(npx nx affected:apps --plain --base HEAD~1 --head HEAD | grep $APP | wc -l)

  if [ $IS_AFFECTED -eq 1 ]; then
    echo "✅ $APP is affected"
    exit 1
  else
    echo "❌ $APP is not affected"
    exit 0
  fi
}

check_is_affected $1

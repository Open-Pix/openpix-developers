#!/usr/bin/env bash
set -x #echo on

rsync -a --ignore-existing ./docs/* ./i18n/en/docusaurus-plugin-content-docs/current/.


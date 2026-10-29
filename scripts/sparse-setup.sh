#!/usr/bin/env bash
# Usage: ./scripts/sparse-setup.sh cm            (one product)
#        ./scripts/sparse-setup.sh cm cms        (several products)
# Run inside a clone made with:  git clone --filter=blob:none --sparse <repo-url>
set -e
[ $# -ge 1 ] || { echo "Give at least one product, e.g. cm"; exit 1; }
paths=(scripts core config data/common)
for p in "$@"; do paths+=("products/$p" "data/products/$p"); done
git sparse-checkout set --cone "${paths[@]}"
echo "Sparse checkout now contains:"; git sparse-checkout list

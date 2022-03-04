#!/bin/bash
set -e

export DIR=$(dirname $0)

echo "Updating dependencies for $(realpath $DIR)..."
helm dependency update $(realpath $DIR)

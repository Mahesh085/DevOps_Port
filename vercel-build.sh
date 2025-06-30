#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building app..."
npm run build
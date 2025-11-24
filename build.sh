#!/usr/bin/env bash

# GitHub Pages build script for React/Vite app

# Install dependencies
npm install

# Build the project
npm run build

# Copy build files to the root directory (GitHub Pages serves from root)
cp -r dist/* .

# Create .nojekyll file to disable Jekyll processing
touch .nojekyll

echo "Build completed successfully!"

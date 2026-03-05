#!/bin/bash
cd "/Users/moradbelmelih/Desktop/v0_rpg-main 2"

# Clear any merge state
rm -f .git/MERGE_HEAD .git/MERGE_MSG

# Add dist folder
git add dist/ -f

# Commit
git commit -m "Add dist for GitHub Pages"

# Push
git push origin main

echo "Deployment pushed to GitHub!"

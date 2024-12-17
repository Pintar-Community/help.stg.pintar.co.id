#!/bin/bash

# read -p "Enter Document Path: " path

# Read the markdown file
CONTENT=$(cat "contents/docs/degrees/id/courses.md")

# Extract image paths in markdown format
# echo "$CONTENT" | grep -o '!\\[.*\\](.*)' | sed -E 's/.*\\((.*)\\).*/\\1/'

echo "$CONTENT" | grep -o '!\[.*\](.*)' | sed -E 's/.*\((.*)\).*/\1/' | while read -r line; do
    # Check if the image path is exist on path
    PATH_IMAGE="static$line"
    if [ ! -f "$PATH_IMAGE" ]; then
      echo "Image not found: $PATH_IMAGE"
    else
      echo "Image found: $PATH_IMAGE"
    fi
done
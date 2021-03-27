#!/bin/bash

# Find all images that are used as cover images

ag --markdown --nofilename --nobreak coverImage: ../_posts | while read -r line;
do
  arr=($line)
  raw_img=${arr[1]}
  # Remove quotes
  temp="${raw_img%\"}"
  img="../public${temp#\"}"
  echo "Processing image: $img"

  # Get directory name
  dir=${img%/*}
  file=${img##*/}
  # echo "Directory $dir"
  # echo "File $file"

  (cd $dir && identify $file)

  # TODO: Use mogrify for all versions
done

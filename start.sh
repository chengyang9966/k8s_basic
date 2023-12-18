#!/bin/bash

# npm run build


for folder in */; 
do
# [ -d "$d" ] && cd "$d"  && echo "Entering into $d and start packages"
    # Will print */ if no directories are available
    echo "$folder"
    cd "$folder"
    if [ -f "package.json" ]; then
    echo "Running npm run start in $folder"
    
    # Run npm run start
    gnome-terminal --tab --title="$folder" -- bash -c "npm run start"
    
    echo "Finished running npm run start in $folder"
  else
    echo "Skipping $folder - No package.json file found"
  fi
  cd ..
    # cd $d 
    # npm run start
done;
# TODO.md

## Bugs
* Very first checkbox does not work in chromium, label is still clickable.
    => does d3-generated nested label/checkbox layout confirm to standards or browser bug?
* Lower axis is still present (but not visible) when data is empty
    => decide how to manage zero length array of cams in general
* Haven't got heights/margins/whatever set up correctly
    => gridlines go below axis, renders different on mobile
* When served remotely, loadCams may not be available on page load

## Features
* Decide on sorting behaviour, really want to require a click? Maybe as an option?
* Bounding box for chart?
* Unit selector (convert between inches/mm?)
* Colour numbers in  checkboxes?
* Consistent colours, check all cam colours are standard css/html colours and add lookup or similar if not
* host on github pages?
   => on AWS for now, which is fine. Maybe a lambda to avoid costs would be good though.
* Refactor/cleanup: consistent CSS classes, naming conventions, consistent style, linting?
* Labels on cams could be nicer (hover over, only include make on the first occurrence, and/or go on the y-axis.
* Popups/links to extra data
   => using svg:title for now but rather rudimentary
* Unittests with  d3? (Probably not worth the effort for SVG elements but maybe sorting etc.)
* Create README, include run/deploy instructions, add deploy script to packages.json?
* More data, there's plenty more cams out now.
   => Also deal with multiple versions of a cam that remain same size 
      (e.g. new dragons might be same cam size as old but different weight etc.)
   => some scripts for updating JSON from CSV and vice-versa JSON integrity.
* Maybe move back to CSV for smaller package size?
    => do some performance testing?
    => look into not loading all of d3

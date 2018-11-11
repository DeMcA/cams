# TODO.md

## Bugs
* Very first checkbox does not work in chromium, label is still clickable.
    => does d3-generated nested label/checkbox layout confirm to standards or browser bug?
* Lower axis is still present (but not visible) when data is empty
    => decide how to manage zero length array of cams in general

## Features
* Decide on sorting behaviour, really want to require a click? Maybe as an option?
* Bounding box for chart?
* Unit selector (convert between inches/mm?)
* Colour numbers in  checkboxes?
* Consistent colours, check all cam colours are standard css/html colours and add lookup or similar if not
* host on github pages?
* Refactor/cleanup: consistent CSS classes, naming conventions, consistent style, linting?
* Labels on cams could be nicer (hover over, only include make on the first occurrence, and/or go on the y-axis.
* Popups/links to extra data
* Unittests in d3?
* Create README, include run/deploy instructions, add deploy script to packages.json?
* More data, there's plenty more cams out now.
  Also deal with multiple versions of a cam that remain same size (e.g. new dragons might be same cam size as old but different weight etc.)
* Maybe move back to csv for smaller package size?
    => do some performance testing?

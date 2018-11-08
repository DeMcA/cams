# TODO.md

## Bugs
* Very first checkbox does not work in chromium, label is instead clickable.
    => does d3-generated nested label/checkbox layout confirm to standards or browser bug?
* Red Alien cams not being displayed
* Axis only appears after some cams are selected
    => update() not called initally. Can just have some/all pre-selected

## Features
* Bounding box for chart?
* Units and unit selector (convert between inches/mm?)
* Colour numbers in  checkboxes?
* Consistent colours, check all cam colours are standard css/html colours and add lookup or similar if not
* host on github pages?
* Refactor/cleanup: consistent CSS classes, naming conventions, consistent style, linting?
* Some way to remember/preselected cams (the cams I own will do initially)?
* Labels on cams could be nicer (hover over, only include make on the first occurrence, and/or go on the y-axis.
* Popups/links to extra data
* Unittests in d3?
* Create README, include run/deploy instructions, add deploy script to packages.json?
* More data, there's plenty more cams out now.
  Also deal with multiple versions of a cam that remain same size (e.g. new dragons might be same cam size as old but different weight etc.)

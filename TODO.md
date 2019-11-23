# TODO.md

## Bugs
* Very first checkbox does not work in chromium, label is still clickable.
    => does d3-generated nested label/checkbox layout confirm to standards or browser bug?
* Offsets/margins not perfect ("0" on axis not fully visible)
* When served remotely, loadCams may not be available on page load

## Features
* Decide on sorting behaviour, really want to require a click? Maybe as an option?
* Bounding box for chart?
* Unit selector (convert between inches/mm?)
* Colour numbers in checkboxes?
* Consistent colours, check all cam colours are standard css/html colours and add lookup or similar if not
* host on github pages?
   => on AWS for now, which is fine. Maybe a lambda to avoid costs would be good though.
* Refactor/cleanup: consistent CSS classes, naming conventions, consistent style, linting?
* Labels on cams could be nicer (only includes make on the first occurrence, and/or go on the y-axis).
* Popups/links to extra data
   => using svg:title for now but rather rudimentary
* Unittests with  d3? (Probably not worth the effort for SVG elements but maybe sorting etc.)
* More data, there are plenty more cams out now.
   => Also deal with multiple versions of a cam that remain same size 
      (e.g. new dragons might be same cam size as old but different weight etc.)
   => rationalise scripts for updating JSON from CSV and vice-versa.
   => Archive/optionally load data for old cams?
* Maybe move back to CSV for smaller package size?
    => do some performance testing?
    => look into not loading all d3 modules
* Could even extend to other gear e.g. nuts
* Better Styling, add fonts etc.
* Make more mobile friendly (currently usable but not great).
* Switch labels from left to right of checkbox
* Better checkbox layout/responsiveness
    => Two cloumns for wide and 1 column for narrow is good but need minimum gap when size approaches single column
    => Single column layout has orphaned checkboxes, even when there's space to have them all on one line
* Better labels on the sort methods
    => Will also need to check/refactor code as behaviour/labels are for some reason linked

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
   => could used `onMouseEnter` e.g https://wattenberger.com/blog/d3-interactive-charts
* Unittests with  d3? (Probably not worth the effort for SVG elements but maybe sorting etc.)
* More data, there are plenty more cams out now.
   => Also deal with multiple versions of a cam that remain same size 
      (e.g. new dragons might be same cam size as old but different weight etc.)
   => rationalise scripts for updating JSON from CSV and vice-versa.
   => Archive/optionally load data for old cams?
* Maybe move back to CSV for smaller package size?
    => do some performance testing?
    => look into not loading all d3 modules. Can import into separate file e.g. https://stackoverflow.com/questions/50606982/what-is-the-correct-way-to-import-and-use-d3-and-its-submodules-in-es6
* Could even extend to other gear e.g. nuts
* Better Styling, add fonts etc.
* Make more mobile friendly (currently usable but not great).
* Switch labels from left to right of checkbox
* Better checkbox layout/responsiveness
    => Two cloumns for wide and 1 column for narrow is good but need minimum gap when size approaches single column
    => Single column layout has orphaned checkboxes, even when there's space to have them all on one line
* Better labels on the sort methods
    => Will also need to check/refactor code as behaviour/labels are for some reason linked
* es6 cleanup: e.g get rid of `var`, default parameters on `update` function. Maybe improve `update` since it gets used for loading of data.
* Use webpack a bit better, e.g. index.html doesn't need to be in /dist. Naming could make more sense.
* Re-organise index.js
    => ordering of functions is basically adhoc
    => could break some bits into separate files?

# TODO.md

## Bugs
* Very first checkbox does not work in chromium, label is instead clickable.
    => does d3-generated nested label/checkbox layout confirm to standards or browser bug?
* Chart is slightly wider than or offset from container
    => update margins, widths etc.
* Red Alien cams not being displayed
* Axis only appears after some cams are selected
    => update() not called initally. Can just have some/all pre-selected

## Features
* Refactor/cleanup: consistent CSS classes, naming conventions, consistent style, linting?
* Some way to remember/preselected cams (the cams I own will do initially)?
* Labels on cams and/or y-axis
* Select all and Select none checkboxes
* Popups/links to extra data
* Unittests in d3?
* More data, there's plenty more cams out now.
  Also deal with multipe versions of a cam that remain same size (e.g. new dragons might be same cam size as old but different weight etc.)

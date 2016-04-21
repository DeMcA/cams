#!/usr/bin/env python
import csv

INFILE = 'cam_sizes.csv'
OUTFILE = 'temp.html'

with open(INFILE, 'r') as f:
    reader = csv.reader(f)
    reader.next()
    prev_model = None
    for row in reader:
        model = row[1]
        number = row[2]
        name = '{} {}'.format(model, number)
        if model != prev_model:
            print("<br> " + model + " <br>")
        print('<input type="checkbox", name="check" value="{}"> {}'.format(name, number))
        prev_model = model



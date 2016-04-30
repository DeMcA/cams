#!/usr/bin/env python
from __future__ import print_function
from fractions import Fraction
import csv, os
import cams

INFILE = 'outneedle.csv'
OUTFILE = os.path.join('templates', 'cams.html')
MY_STUFF = [] # cams.my_stuff # list of names that will be pre-checked

html_top = '''<html>

<head>
    <title>Cam Size Chart</title>
</head>

<body>

    <div class=testing>
        {% for item in selected %}
            {{ item }}
        {% endfor %}
    </div>

    <div class=matplotlib>
        <img src="{{ url_for('chart', selected=selected, sort_by=sort_by, units=units)}}">
    </div>
    <form method="post">

    <input type="submit", value="Plot Cams"><br><br>
    Sort by:
    {% if sort_by == "size_l" %}
        <input type="radio", name="sort_by" value="size_l" checked="checked"> Min Size
        <input type="radio", name="sort_by" value="model"> Model name <br>
    {% else %}
        <input type="radio", name="sort_by", value="size_l" > Min Size
        <input type="radio", name="sort_by", value="model", checked="checked"> Model name <br>
    {% endif %}

    {% if units == "metric" %}
        <input type="radio", name="units", value="metric", checked="checked"> Metric
        <input type="radio", name="units" value="imperial"> Imperial <br>
    {% else %}
        <input type="radio", name="units", value="metric" > Metric
        <input type="radio", name="units", value="imperial", checked="checked"> Imperial <br>
    {% endif %}

    <script language="JavaScript">
    function toggle_all(source) {
        checkboxes_all = document.getElementsByName('check');
        for (var i=0, n=checkboxes_all.length; i<n; i++) {
            if (checkboxes_all[i].type == 'checkbox'){
                checkboxes_all[i].checked = source.checked;
                }
        }
    }
    </script>

    <br> <input type="checkbox" onClick="toggle_all(this)", name="toggle" /> Everything <br>
'''

html_bottom = '''        <br>
    </form>

   </body>

</html>
'''

def make_toggle_html(make, model):
    pretty_model = model.replace('_', ' ')+'s'
    model_top =  '''    <br> {2} {1} <br>
            <script language="JavaScript">
            function toggle_{0}(source) {{
                checkboxes_{0} = document.getElementsByClassName('check_{0}');
                for (var i=0, n=checkboxes_{0}.length; i<n; i++) {{
                    checkboxes_{0}[i].checked = source.checked;
                }}
            }}
            </script>
    '''.format(model, pretty_model, make)
    return model_top


def read_csv(infile=INFILE):
    with open(infile, 'r') as f:
        reader = csv.reader(f)
        reader.next()
        return [i for i in reader]

def write_html(reader, pre_checked=MY_STUFF, outfile=OUTFILE):
    f = open(outfile, 'w')
    print(html_top, file=f)
    prev_model = None
    for row in reader:
        make = row[0]
        model = row[1]
        number = row[2]
        if '/' in number:
            number = '{:0.3g}'.format(float(Fraction(number))) # '/' is problematic in html
        name = '{} {}'.format(model, number)
        model = model.replace(' ', '_')
        if prev_model is None:
            print(make_toggle_html(make, model), file=f)
        elif model != prev_model:
            #print(model, prev_model)
            print('        <input type="checkbox" onClick="toggle_{0}(this)", name="all", class="check"" /> All <br>'\
                  .format(prev_model), file=f)
            print(make_toggle_html(make, model), file=f)
        checked = ''
        if name in pre_checked:
            checked = 'checked="checked"'
        print('        <input type="checkbox", name="check", value="{0}", class="check_{3}" {1}> {2}'\
              .format(name, checked, number, model), file=f)
        prev_model = model
    print('        <input type="checkbox" onClick="toggle_{0}(this)", name="all", class="check" /> All'\
            .format(prev_model), file=f)
    print(html_bottom, file=f)

if __name__ == '__main__':
    write_html(read_csv())

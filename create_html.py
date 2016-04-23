#!/usr/bin/env python
from __future__ import print_function
import csv, os
import cams

INFILE = 'cam_sizes.csv'
OUTFILE = os.path.join('templates', 'images.html')
MY_STUFF = cams.my_stuff # list of names that will be pre-checked

html_top = '''<html>

<head>
    <title>Cam Size Chart</title>
</head>

<body>
    <div class=matplotlib>
        <img src="{{ url_for('chart', selected=selected)}}">
    </div>
    <form method="post">

'''
#        <script language="JavaScript">
#        function toggle(source) {
#            checkboxes = document.getElementsByName('all');
#            for (var i=0, n=checkboxes.length; i<n; i++) {
#                checkboxes[i].checked = source.checked;
#            }
#        }
#        </script>
#
#        <input type="checkbox" onClick="toggle(this)" /> Toggle All<br/>
#    '''
#
html_bottom = '''        <br>
        <input type="submit">
    </form>

   </body>

</html>
'''

def make_toggle_html(model):
    model_top =  '''    <br> {0} <br>
            <script language="JavaScript">
            function toggle_{0}(source) {{
                checkboxes_{0} = document.getElementsByName('check_{0}');
                for (var i=0, n=checkboxes_{0}.length; i<n; i++) {{
                    checkboxes_{0}[i].checked = source.checked;
                }}
            }}
            </script>
    '''.format(model)
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
        model = row[1]
        number = row[2]
        name = '{} {}'.format(model, number)
        if prev_model is None:
            print(make_toggle_html(model), file=f)
        elif model != prev_model:
            #print(model, prev_model)
            print('        <input type="checkbox" onClick="toggle_{0}(this)", name="all" /> All <br>'\
                  .format(prev_model), file=f)
            print(make_toggle_html(model), file=f)
        checked = ''
        if name in pre_checked:
            checked = 'checked="checked"'
        print('        <input type="checkbox", name="check_{3}" value="{0}" {1}> {2}'\
              .format(name, checked, number, model), file=f)
        prev_model = model
    print('        <input type="checkbox" onClick="toggle_{0}(this)", name="all" /> Alll'\
            .format(prev_model), file=f)
    print(html_bottom, file=f)

if __name__ == '__main__':
    write_html(read_csv())

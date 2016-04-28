#!/usr/bin/env python
from flask import Flask, send_file, render_template, request
import StringIO, ast
import cams

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/cams/', methods=['GET', 'POST'])
@app.route('/cams/<selected>')
def images(name=None):
    all_values = request.form.listvalues()
    selected = []
    for i in all_values:
        for j in i:
            if j not in  ['on', 'model', 'size_l', 'imperial', 'metric']:
                selected.append(j)
                # Can use itertools.chain, nested list comprehension, but I
                # probably shouldn't be reading this list in the first place.
    print selected
    sort_by = request.form.get('sort_by')
    units = request.form.get('units')
    return render_template('cams.html', selected=selected, sort_by=sort_by,
                           units=units)


@app.route('/fig/<selected>/')
@app.route('/fig/<selected>/<sort_by>&<units>')
def chart(selected=None, sort_by=None, units=None):
    results = ast.literal_eval(selected)
    if len(results) == 0:
        results = None
        sort_by = 'model' # what's this doing?
    fig = cams.plot_data(cams.equipment(), results, sort_by, units)
    # pythonanywhere loads as module so just equipment from __main__ fails
    img = StringIO.StringIO()
    fig.savefig(img, format='png', bbox_inches='tight', pad_inches=0.1)
    img.seek(0)
    return send_file(img, mimetype='image/png')


if __name__ == '__main__':
    equipment = cams.equipment()
    app.run(host='0.0.0.0', debug=True)

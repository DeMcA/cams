#!/usr/bin/env python
from flask import Flask, send_file, render_template, request
#import matplotlib.pyplot as plt
import StringIO, ast
import cams

app = Flask(__name__)

@app.route('/')
def main():
    return 'Text'

@app.route('/images/', methods=['GET', 'POST'])
@app.route('/images/<selected>')
def images(name=None):
    all_values = request.form.listvalues()
    selected = []
    for i in all_values:
        for j in i:
            if j not in  ['on', 'Model name', 'Min size']:
                selected.append(j) # because nested comprehensions are bad
    button = request.form.get('sort_by')
    sort_by = 2
    if button == 'Model name':
        sort_by = 0
    #selected = ",".join(selected)
    #if len selected = 0:
    return render_template('images.html', selected=selected, sort_by=sort_by)


@app.route('/fig/<selected>/')
@app.route('/fig/<selected>/<int:sort_by>')
def chart(selected=None, sort_by=None):
    #else:
    #results = selected.split(",")
    results = ast.literal_eval(selected)
    order_by = sort_by
    if len(results) == 0:
        results = None
        order_by = 0
    fig = cams.plot_data(cams.equipment, results, order_by)
    img = StringIO.StringIO()
    #img.flush()
    fig.savefig(img, format='png', bbox_inches='tight', pad_inches=0.1)
    img.seek(0)
    #im = Image.open(img)
    return send_file(img, mimetype='image/png')


if __name__ == '__main__':
    equipment = cams.equipment
    app.run()

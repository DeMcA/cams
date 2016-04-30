#!/usr/bin/env python
from flask import Flask, send_file, render_template, request
import StringIO
import cams

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/cams/', methods=['GET', 'POST'])
def images(name=None):
    selected = request.form.getlist('check')
    sort_by = request.form.get('sort_by') or 'model'
    units = request.form.get('units') or 'metric'
    return render_template('cams.html', selected=selected, sort_by=sort_by,
                           units=units)

@app.route('/chart&<sort_by>&<units>')
def chart(selected=None, sort_by=None, units=None):
    results = request.args.getlist('selected')
    fig = cams.plot_data(cams.all_equipment, results, sort_by, units)
    img = StringIO.StringIO()
    fig.savefig(img, format='png', bbox_inches='tight', pad_inches=0.1)
    img.seek(0)
    return send_file(img, mimetype='image/png')


if __name__ == '__main__':
    equipment = cams.equipment()
    app.run(host='0.0.0.0', debug=True)

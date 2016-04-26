#!/usr/local/env python
# -*- coding: utf-8 -*-
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
#import numpy as np
from fractions import Fraction
import csv, os
from operator import itemgetter, attrgetter


class Gear(object):
    '''parent class for data and methods associated with a piece of gear'''
    def __init__(self, make, model, number, size_l, size_u,
                 rating=None, weight=None, colour=None):
        self.make = make
        self.model = model
        self.number = number
        self.size_l = float(size_l)
        self.size_u = float(size_u)
        self.weight = weight
        self.colour = colour
        self.rating = rating
        self.name = '{} {}'.format(self.model, self.number)
        self.cam_range = self.size_u - self.size_l

    def graph_data(self):
        ''' returns the data required for each entry in a plot '''
        return [self.name, self.cam_range, float(self.size_l), self.colour]

    def __iter__(self):
        for x in self.graph_data():
            yield x


def read_file(infile):
    ''' reads a csv infile and returns a dictionary of Gear instances '''
    equipment = {}
    with open(infile, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            number = row['number']
            if '/' in number:
                number = '{:0.3g}'.format(float(Fraction(number)))
            # '/' is problematic in html
            name = '{} {}'.format(row['model'], number)
            equipment[name] = Gear(row ['make'], row['model'], number,
                                  size_l=row['size_l'],
                                  size_u=row['size_u'],
                                  colour=row['colour'])
    return equipment


def plot_data(equipment, cupboard=None, sort_by='size_l'):
    '''
    Function to plot bars for a subset of all available Gear instances

    equipment:  dictionary of Gear instances
    cupboard:   list of keys to select from equipment
    sort_by:    0 -> name
                1 -> cam_range
                2 -> size_l (lowest possible size)
                3 -> colour
    '''
    if cupboard is not None:
        data = []
        #data.append(equipment[e].graph_data())
        for e in cupboard:
            data.append(equipment[e])
    else:
        data = equipment.values()
    data.sort(key=attrgetter('size_l'))
    if sort_by == 'model':
        data.sort(key=attrgetter('model'))
    names, cam_ranges, lefts, colours = zip(*data)

    ### Now use pyplot with these data:
    #fig, ax = plt.subplots()
    fig = plt.figure()
    #max_name = max([len(i) for i in names])
    #t = plt.text(0.5, 0.5, max_name)
    #bb = t.get_window_extent(renderer=r)
    #width = bb.width
    #fig.subplots_adjust(top=0.5)
    ax = fig.add_subplot(111)
    chart = ax.barh(range(len(names)), cam_ranges, left=lefts, color=colours,
             height = 0.8, align='center')
    fig.set_size_inches(10, 0.3 * len(names))
    ax.yaxis.set_visible(False)
    #plt.yticks(range(len(names)), names)
    #plt.axis('image')
    plt.xlabel('Size (mm)')
    #fig.tight_layout()
    #plt.subplots_adjust(right=0.9)
    plt.title('Cam Size Chart')
    for i,j in enumerate(chart):
        label_x = j.get_width()+j.get_x()+1
        t = plt.text(label_x, j.get_y()+j.get_height()/2, names[i], verticalalignment='center')
    if __name__ != '__main__':
        r = fig.canvas.get_renderer()
        bbox = ax.get_window_extent().transformed(fig.dpi_scale_trans.inverted())
        axes_size = bbox.width * fig.dpi
        max_label_width = 0
        for i,j in enumerate(chart):
            label_x = j.get_width()+j.get_x()+1
            t = plt.text(label_x, j.get_y()+j.get_height()/2, names[i], verticalalignment='center')
            w = t.get_window_extent(renderer=r).width
            if w > max_label_width:
                max_label_width = w
        #print 'max_label: {}, axes_size: {}, max_label_width: {}'.format("pass", axes_size, max_label_width)
        plt.xlim(xmax=plt.xlim()[1]+(axes_size/max_label_width)+2)
        plt.ylim(ymin=-1, ymax=len(names))
        #plt.autoscale(True)
        #plt.close(fig)
    return fig


my_stuff = ['Zero 5', 'Zero 6', 'Dragon 5', 'Helium 2', 'Helium 3', 'Helium 2.5',
            '4CU 4', '4CU 1', 'X4 0.4']

def equipment(infile='outneedle.csv'):
    this_dir = os.path.dirname(__file__)
    return read_file(os.path.join(this_dir, infile))

if __name__ == '__main__':
    plt.switch_backend('TkAgg')
    plt.show(plot_data(equipment(), cupboard=my_stuff, sort_by=2))

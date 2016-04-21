#!/usr/local/env python
# -*- coding: utf-8 -*-

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
#import numpy as np
import csv
from operator import itemgetter

class Gear(object):
    '''parent class for data and methods associated with a piece of gear'''
    def __init__(self, make, model, number, size_l=None, size_u=None,
                 rating=None, weight=None, colour=None):
        self.make = make
        self.model = model
        self.number = number
        self.size_l = size_l
        self.size_u = size_u
        self.weight = weight
        self.colour = colour
        self.rating = rating
        self.name = '{} {}'.format(self.model, self.number)
        self.cam_range = float(self.size_u) - float(self.size_l)

    def plot(self):
        pass


def read_file(infile):
    ''' reads a csv infile and returns a dictionary of Gear instances '''
    # How do I want to store my data?
    # Using a class is unnecessary right now, will I want class methods?
    #   -> not if I'm doing all the plotting externally
    # And how should I store the classes; dict is unordered but list of unnamed
    # classes is harder to refer back to.
    equipment = {}
    with open(infile, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = '{} {}'.format(row['model'], row['number'])
            equipment[name] = Gear(row ['make'], row['model'], row['number'],
                                  size_l=row['size_l'],
                                  size_u=row['size_u'],
                                  colour=row['colour'])
    return equipment


def plot_data(equipment, cupboard=None, sort_by=0):
    '''
    Function to plot bars for a subset of all available Gear instances

    equipment:  dictionary of Gear instances
    cupboard:   list of keys to select from equipment
    sort_by:    0 -> name
                1 -> cam_range
                2 -> size_l (lowest possible size)
                3 -> colour
    '''
    # Maybe I want to use subplots and have some of the functionality in the
    # Gear class?
    data = []
    if cupboard is None:
        cupboard = equipment
    for e in cupboard:
        data.append([equipment[e].name,
                     equipment[e].cam_range,
                     float(equipment[e].size_l),
                     equipment[e].colour,
                     ])
    data = sorted(data, key=itemgetter(sort_by))
    names, cam_ranges, lefts, colours = zip(*data)
    # An alternative way to achieve sorting might be numpy arrays?
    fig = plt.figure(1)
    plt.barh(range(len(names)), cam_ranges, left=lefts, color=colours,
             height=0.8, align='center')
    plt.yticks(range(len(names)), names)
    plt.xlabel('Size (mm)')
    plt.title('Cam Size Chart')
    plt.close(fig)
    return fig

#cam1 = Gear(name="dragon 2", colour="green", size_l=22, size_u=44)
#cam2 = Gear(name="dragon 5", colour="blue", size_l=50, size_u=85)
#equipment = [cam1, cam2]

my_stuff = ['Zero 5', 'Zero 6', 'Dragon 5', 'Helium 2', 'Helium 3', 'Helium 2.5',
            '4CU 4', '4CU 1', 'X4 0.4'
            #, 'Totem 1.25', 'Dragon 2', 'Helium 1.5'
            ]
my_stuff = [u'Dragon 1', u'4CU 1', u'4CU 2']
equipment = read_file('cam_sizes.csv')

if __name__ == '__main__':
    #plt.show(plot_data(equipment)) # To plot all data

    plt.show(plot_data(equipment, my_stuff, sort_by=0))
    # Plot my gear and order by size

#!/usr/bin/env  python3
import sys
import csv
from urllib.request import urlopen
from argparse import ArgumentParser
from bs4 import BeautifulSoup


def parse_arguments():
    parser = ArgumentParser()
    parser.add_argument('-u', '--url', dest='urls', help='', nargs='+')
    parser.add_argument('-c', '--clean', help='')
    args = parser.parse_args()
    return args


def parse_rows(rows):
    results = []
    for row in rows:
        table_headers = row.find_all('th')
        if table_headers:
            results.append([headers.get_text() for headers in table_headers])

        table_data = row.find_all('td')
        if table_data:
            results.append([data.get_text().strip() for data in table_data])
    return results


def write_csv(tables, outfile='temp.csv'):
    ''' writes tables, a list of all tables, to csv'''
    with open(outfile, 'w+') as f:
        writer = csv.writer(f)
        for t in tables:
            writer.writerows(t)


def get_table_data(url):
    resp = urlopen(url)
    soup = BeautifulSoup(resp.read())
    try:
        table = soup.find('table')
        rows = table.find_all('tr')
    except AttributeError as e:
        raise ValueError("Table not found.")

    return parse_rows(rows)

def clean_file(infile, outfile='temp.csv'):
    '''infile currently looks like:

            Totem Basic Cams,,,,,
            0.5,blue,11.2 - 17.4,33,5,56
            ...
'''
    with open(infile, 'r') as f:
        reader = csv.reader(f)
        name = None
        rows = []
        for row in reader:
            if row[1] == '': # E.g. "BD Camalot,,,,"
                name = row[0]
                continue
            elif '/' in row[1]:  # Don't want hybrid cams
                continue
            make, _, model = name.partition(' ') # assumes single word make
            size_l, _, size_u = row[2].partition('-')
            new_line = [make, model, row[0], row[1], size_l.strip(),
                        size_u.strip()] + row[-3:]
            rows.append(new_line)
    write_csv([rows]) # Abusing the existing function



if __name__ == '__main__':
    all_tables = []
    args = parse_arguments()
    if args.urls:
        for url in args.urls:
            all_tables.append(get_table_data(url))
            write_csv(all_tables)
    if args.clean:
        clean_file(args.clean)

import csv
import json

with open('temp.csv', 'r') as csv_file, open('temp.json', 'w') as jsonfile:
    reader = csv.DictReader(csv_file, skipinitialspace=True)

    rows = []
    for row in reader:
        rows.append(row)

    json.dump(rows, jsonfile)

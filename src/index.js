import * as d3 from "d3";


var allcams = [
{
    "make": "BD",
    "model": "Camalot C3",
    "number": "000",
    "colour": "Grey",
    "size_l": 7.8,
    "size_u": 12.9,
    "head_width": 28,
    "strength": 4,
    "weight": 55
},
{
    "make": "BD",
    "model": "Camalot C3",
    "number": "00",
    "colour": "Purple",
    "size_l": 9,
    "size_u": 13.7,
    "head_width": 28,
    "strength": 6,
    "weight": 57
},
{
    "make": "BD",
    "model": "Camalot C3",
    "number": 0,
    "colour": "Green",
    "size_l": 10.7,
    "size_u": 15.8,
    "head_width": 28,
    "strength": 7,
    "weight": 59
},
{
    "make": "BD",
    "model": "Camalot C3",
    "number": 1,
    "colour": "Red",
    "size_l": 12,
    "size_u": 18.8,
    "head_width": 29,
    "strength": 10,
    "weight": 62
},
{
    "make": "BD",
    "model": "Camalot C3",
    "number": 2,
    "colour": "Yellow",
    "size_l": 14.2,
    "size_u": 22.6,
    "head_width": 29,
    "strength": 10,
    "weight": 66
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 0.3,
    "colour": "Blue",
    "size_l": 13.8,
    "size_u": 23.4,
    "head_width": 42,
    "strength": 10,
    "weight": 71
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 0.4,
    "colour": "Grey",
    "size_l": 15.5,
    "size_u": 26.7,
    "head_width": 42,
    "strength": 10,
    "weight": 82
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 0.5,
    "colour": "Purple",
    "size_l": 19.6,
    "size_u": 33.5,
    "head_width": 45,
    "strength": 12,
    "weight": 97
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 0.75,
    "colour": "Green",
    "size_l": 23.9,
    "size_u": 41.2,
    "head_width": 50,
    "strength": 14,
    "weight": 116
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 1,
    "colour": "Red",
    "size_l": 30.2,
    "size_u": 52.1,
    "head_width": 52,
    "strength": 14,
    "weight": 134
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 2,
    "colour": "Gold",
    "size_l": 37.2,
    "size_u": 64.9,
    "head_width": 56,
    "strength": 14,
    "weight": 158
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 3,
    "colour": "Blue",
    "size_l": 50.7,
    "size_u": 87.9,
    "head_width": 60,
    "strength": 14,
    "weight": 201
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 4,
    "colour": "Silver",
    "size_l": 66,
    "size_u": 114.7,
    "head_width": 70,
    "strength": 14,
    "weight": 278
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 5,
    "colour": "Purple",
    "size_l": 85.4,
    "size_u": 148.5,
    "head_width": 80,
    "strength": 14,
    "weight": 381
},
{
    "make": "BD",
    "model": "Camalot C4",
    "number": 6,
    "colour": "Green",
    "size_l": 114.1,
    "size_u": 195,
    "head_width": 90,
    "strength": 14,
    "weight": 557
},
{
    "make": "BD",
    "model": "X4",
    "number": 0.1,
    "colour": "Red",
    "size_l": 8.4,
    "size_u": 13.8,
    "head_width": 31,
    "strength": 5,
    "weight": 51
},
{
    "make": "BD",
    "model": "X4",
    "number": 0.2,
    "colour": "Yellow",
    "size_l": 9.9,
    "size_u": 16.5,
    "head_width": 31,
    "strength": 6,
    "weight": 54
},
{
    "make": "BD",
    "model": "X4",
    "number": 0.3,
    "colour": "Blue",
    "size_l": 12.4,
    "size_u": 21.2,
    "head_width": 34,
    "strength": 8,
    "weight": 75
},
{
    "make": "BD",
    "model": "X4",
    "number": 0.4,
    "colour": "Grey",
    "size_l": 15.5,
    "size_u": 26.6,
    "head_width": 33,
    "strength": 9,
    "weight": 82
},
{
    "make": "BD",
    "model": "X4",
    "number": 0.5,
    "colour": "Purple",
    "size_l": 19.8,
    "size_u": 33.7,
    "head_width": 34,
    "strength": 9,
    "weight": 91
},
{
    "make": "BD",
    "model": "X4",
    "number": 0.75,
    "colour": "Green",
    "size_l": 24,
    "size_u": 41.2,
    "head_width": 39,
    "strength": 9,
    "weight": 112
},
{
    "make": "CCH",
    "model": "Alien",
    "number": 1,
    "colour": "red",
    "size_l": 20,
    "size_u": 33,
    "head_width": 33.02,
    "strength": 10,
    "weight": 84
},
{
    "make": "CCH",
    "model": "Alien",
    "number": "1/2",
    "colour": "green",
    "size_l": 13,
    "size_u": 22,
    "head_width": 33.02,
    "strength": 7,
    "weight": 70
},
{
    "make": "CCH",
    "model": "Alien",
    "number": "1/3",
    "colour": "black",
    "size_l": 8,
    "size_u": 14,
    "head_width": 35.56,
    "strength": 5,
    "weight": 64
},
{
    "make": "CCH",
    "model": "Alien",
    "number": "3/4",
    "colour": "yellow",
    "size_l": 15,
    "size_u": 25,
    "head_width": 33.02,
    "strength": 9,
    "weight": 80
},
{
    "make": "CCH",
    "model": "Alien",
    "number": "3/8",
    "colour": "blue",
    "size_l": 10,
    "size_u": 17,
    "head_width": 35.56,
    "strength": 6,
    "weight": 68
},
{
    "make": "CCH",
    "model": "Alien",
    "number": "7/8",
    "colour": "grey",
    "size_l": 17,
    "size_u": 30,
    "head_width": 33.02,
    "strength": 10,
    "weight": 82
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 0.1255,
    "colour": "White",
    "size_l": 10,
    "size_u": 15,
    "head_width": 16,
    "strength": 4,
    "weight": 26
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 0.25,
    "colour": "Black",
    "size_l": 13.5,
    "size_u": 25,
    "head_width": 22,
    "strength": 5,
    "weight": 26
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 0.5,
    "colour": "Pink",
    "size_l": 16,
    "size_u": 28,
    "head_width": 25,
    "strength": 9,
    "weight": 26
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 1,
    "colour": "Red",
    "size_l": 20,
    "size_u": 30,
    "head_width": 27,
    "strength": 9,
    "weight": 35
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 1.5,
    "colour": "Brown",
    "size_l": 26,
    "size_u": 38,
    "head_width": 28,
    "strength": 14,
    "weight": 50
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 2,
    "colour": "Blue",
    "size_l": 29,
    "size_u": 41,
    "head_width": 28,
    "strength": 14,
    "weight": 55
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 2.5,
    "colour": "blue",
    "size_l": 32,
    "size_u": 48,
    "head_width": 32,
    "strength": 17,
    "weight": 77
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 3,
    "colour": "blue",
    "size_l": 38,
    "size_u": 54,
    "head_width": 33,
    "strength": 17,
    "weight": 90
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 3.5,
    "colour": "Beige",
    "size_l": 41,
    "size_u": 60,
    "head_width": 39,
    "strength": 17,
    "weight": 117
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 4,
    "colour": "Green",
    "size_l": 45,
    "size_u": 64,
    "head_width": 39,
    "strength": 17,
    "weight": 138
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 5,
    "colour": "Orange",
    "size_l": 57,
    "size_u": 89,
    "head_width": 38,
    "strength": 22,
    "weight": 120
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 6,
    "colour": "Yellow",
    "size_l": 73,
    "size_u": 105,
    "head_width": 49,
    "strength": 18,
    "weight": 200
},
{
    "make": "Camp",
    "model": "Tricam",
    "number": 7,
    "colour": "Gold",
    "size_l": 92,
    "size_u": 140,
    "head_width": 65,
    "strength": 16,
    "weight": 264
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 0,
    "colour": "Blue",
    "size_l": 13,
    "size_u": 19,
    "head_width": 42,
    "strength": 14,
    "weight": 75
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 0.5,
    "colour": "Red",
    "size_l": 17,
    "size_u": 24,
    "head_width": 42,
    "strength": 14,
    "weight": 80
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 1,
    "colour": "Gold",
    "size_l": 19,
    "size_u": 29,
    "head_width": 48,
    "strength": 14,
    "weight": 93
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 1.25,
    "colour": "Purple",
    "size_l": 21,
    "size_u": 33,
    "head_width": 48,
    "strength": 14,
    "weight": 96
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 1.5,
    "colour": "Silver",
    "size_l": 23,
    "size_u": 35,
    "head_width": 48,
    "strength": 14,
    "weight": 97
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 1.75,
    "colour": "Green",
    "size_l": 25,
    "size_u": 41,
    "head_width": 48,
    "strength": 14,
    "weight": 99
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 2,
    "colour": "Red",
    "size_l": 29,
    "size_u": 44,
    "head_width": 48,
    "strength": 14,
    "weight": 110
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 2.5,
    "colour": "Gold",
    "size_l": 33,
    "size_u": 55,
    "head_width": 53,
    "strength": 14,
    "weight": 123
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 3,
    "colour": "Purple",
    "size_l": 43,
    "size_u": 66,
    "head_width": 56,
    "strength": 14,
    "weight": 151
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 3.5,
    "colour": "Blue",
    "size_l": 51,
    "size_u": 82,
    "head_width": 65,
    "strength": 14,
    "weight": 185
},
{
    "make": "DMM",
    "model": "4CU",
    "number": 4,
    "colour": "Silver",
    "size_l": 64,
    "size_u": 100,
    "head_width": 65,
    "strength": 14,
    "weight": 224
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": "00",
    "colour": "Blue",
    "size_l": 13.6,
    "size_u": 22.5,
    "head_width": 39.1,
    "strength": 9,
    "weight": 75
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": 0,
    "colour": "Silver",
    "size_l": 16,
    "size_u": 26.7,
    "head_width": 40.1,
    "strength": 12,
    "weight": 85
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": 1,
    "colour": "Purple",
    "size_l": 20,
    "size_u": 33,
    "head_width": 40.2,
    "strength": 14,
    "weight": 97
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": 2,
    "colour": "Green",
    "size_l": 24,
    "size_u": 41,
    "head_width": 40.8,
    "strength": 14,
    "weight": 106
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": 3,
    "colour": "Red",
    "size_l": 29,
    "size_u": 50,
    "head_width": 42.2,
    "strength": 14,
    "weight": 119
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": 4,
    "colour": "Gold",
    "size_l": 38,
    "size_u": 64,
    "head_width": 51.2,
    "strength": 14,
    "weight": 148
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": 5,
    "colour": "Blue",
    "size_l": 50,
    "size_u": 85,
    "head_width": 55.4,
    "strength": 14,
    "weight": 195
},
{
    "make": "DMM",
    "model": "Dragon",
    "number": 6,
    "colour": "Silver",
    "size_l": 68,
    "size_u": 114,
    "head_width": 66.1,
    "strength": 14,
    "weight": 276
},
{
    "make": "Lowe",
    "model": "Ball Nut",
    "number": 1,
    "colour": "Blue",
    "size_l": 3,
    "size_u": 6,
    "head_width": 15,
    "strength": 8,
    "weight": 29
},
{
    "make": "Lowe",
    "model": "Ball Nut",
    "number": 2,
    "colour": "Red",
    "size_l": 4.5,
    "size_u": 9,
    "head_width": 19,
    "strength": 8,
    "weight": 37
},
{
    "make": "Lowe",
    "model": "Ball Nut",
    "number": 3,
    "colour": "Gold",
    "size_l": 6,
    "size_u": 12,
    "head_width": 21,
    "strength": 8,
    "weight": 54
},
{
    "make": "Lowe",
    "model": "Ball Nut",
    "number": 4,
    "colour": "Green",
    "size_l": 8,
    "size_u": 14,
    "head_width": 23,
    "strength": 8,
    "weight": 57
},
{
    "make": "Lowe",
    "model": "Ball Nut",
    "number": 5,
    "colour": "Purple",
    "size_l": 10.5,
    "size_u": 18,
    "head_width": 24,
    "strength": 8,
    "weight": 73
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": "00",
    "colour": "Grey",
    "size_l": 8.5,
    "size_u": 12,
    "head_width": 30,
    "strength": 5,
    "weight": 45
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 0,
    "colour": "Purple",
    "size_l": 10,
    "size_u": 15,
    "head_width": 30,
    "strength": 5,
    "weight": 45
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 1,
    "colour": "Blue",
    "size_l": 12.5,
    "size_u": 18,
    "head_width": 32,
    "strength": 8,
    "weight": 52
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 2,
    "colour": "Yellow",
    "size_l": 15.5,
    "size_u": 22.5,
    "head_width": 32,
    "strength": 10,
    "weight": 55
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 3,
    "colour": "Orange",
    "size_l": 18.5,
    "size_u": 26.5,
    "head_width": 37,
    "strength": 10,
    "weight": 65
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 4,
    "colour": "Red",
    "size_l": 23.5,
    "size_u": 33.5,
    "head_width": 38,
    "strength": 10,
    "weight": 75
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 5,
    "colour": "Black",
    "size_l": 28,
    "size_u": 39.5,
    "head_width": 41,
    "strength": 10,
    "weight": 85
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 6,
    "colour": "Green",
    "size_l": 32.5,
    "size_u": 48,
    "head_width": 42,
    "strength": 10,
    "weight": 96
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 7,
    "colour": "Blue",
    "size_l": 40,
    "size_u": 57.5,
    "head_width": 46,
    "strength": 10,
    "weight": 112
},
{
    "make": "Metolius",
    "model": "UL Master Cam",
    "number": 8,
    "colour": "Purple",
    "size_l": 48.5,
    "size_u": 71.5,
    "head_width": 46,
    "strength": 10,
    "weight": 129
},
{
    "make": "Omega Pacific",
    "model": "Link Cam",
    "number": 0.5,
    "colour": "purple",
    "size_l": 13.5,
    "size_u": 35,
    "head_width": 46,
    "strength": 8,
    "weight": 95
},
{
    "make": "Omega Pacific",
    "model": "Link Cam",
    "number": 0.75,
    "colour": "green",
    "size_l": 17.8,
    "size_u": 44.5,
    "head_width": 48.8,
    "strength": 10,
    "weight": 113
},
{
    "make": "Omega Pacific",
    "model": "Link Cam",
    "number": 1,
    "colour": "red",
    "size_l": 21.1,
    "size_u": 53.3,
    "head_width": 55,
    "strength": 14,
    "weight": 176
},
{
    "make": "Omega Pacific",
    "model": "Link Cam",
    "number": 2,
    "colour": "gold",
    "size_l": 25.4,
    "size_u": 64,
    "head_width": 55,
    "strength": 14,
    "weight": 207
},
{
    "make": "techROCK",
    "model": "Alien Evolution",
    "number": 1,
    "colour": "red",
    "size_l": 20,
    "size_u": 33,
    "head_width": 30,
    "strength": 10,
    "weight": 61
},
{
    "make": "techROCK",
    "model": "Alien Evolution",
    "number": "1/2",
    "colour": "green",
    "size_l": 13,
    "size_u": 22,
    "head_width": 29,
    "strength": 7,
    "weight": 52
},
{
    "make": "techROCK",
    "model": "Alien Evolution",
    "number": "1/3",
    "colour": "black",
    "size_l": 8,
    "size_u": 14,
    "head_width": 30,
    "strength": 5,
    "weight": 46
},
{
    "make": "techROCK",
    "model": "Alien Evolution",
    "number": "3/4",
    "colour": "yellow",
    "size_l": 15,
    "size_u": 25,
    "head_width": 29,
    "strength": 10,
    "weight": 58
},
{
    "make": "techROCK",
    "model": "Alien Evolution",
    "number": "3/8",
    "colour": "blue",
    "size_l": 10,
    "size_u": 17,
    "head_width": 30,
    "strength": 6,
    "weight": 48
},
{
    "make": "techROCK",
    "model": "Alien Evolution",
    "number": "7/8",
    "colour": "grey",
    "size_l": 17,
    "size_u": 30,
    "head_width": 30,
    "strength": 10,
    "weight": 59
},
{
    "make": "Totem",
    "model": "Totem Basic",
    "number": 0.5,
    "colour": "blue",
    "size_l": 11.2,
    "size_u": 17.4,
    "head_width": 33,
    "strength": 5,
    "weight": 56
},
{
    "make": "Totem",
    "model": "Totem Basic",
    "number": 0.65,
    "colour": "green",
    "size_l": 13.6,
    "size_u": 21.4,
    "head_width": 33,
    "strength": 7,
    "weight": 66
},
{
    "make": "Totem",
    "model": "Totem Basic",
    "number": 0.75,
    "colour": "yellow",
    "size_l": 16.6,
    "size_u": 26.1,
    "head_width": 33,
    "strength": 9,
    "weight": 73
},
{
    "make": "Totem",
    "model": "Totem Basic",
    "number": 0.95,
    "colour": "red",
    "size_l": 19.9,
    "size_u": 31.6,
    "head_width": 33,
    "strength": 11,
    "weight": 78
},
{
    "make": "Totem",
    "model": "Totem",
    "number": 0.5,
    "colour": "black",
    "size_l": 11.7,
    "size_u": 18.9,
    "head_width": "",
    "strength": 6,
    "weight": 69
},
{
    "make": "Totem",
    "model": "Totem",
    "number": 0.65,
    "colour": "blue",
    "size_l": 13.8,
    "size_u": 22.5,
    "head_width": 30,
    "strength": 8,
    "weight": 75
},
{
    "make": "Totem",
    "model": "Totem",
    "number": 0.8,
    "colour": "yellow",
    "size_l": 17,
    "size_u": 27.7,
    "head_width": 32,
    "strength": 9,
    "weight": 83
},
{
    "make": "Totem",
    "model": "Totem",
    "number": 1,
    "colour": "purple",
    "size_l": 20.9,
    "size_u": 34.2,
    "head_width": 34,
    "strength": 10,
    "weight": 95
},
{
    "make": "Totem",
    "model": "Totem",
    "number": 1.25,
    "colour": "green",
    "size_l": 25.7,
    "size_u": 42.3,
    "head_width": 37,
    "strength": 13,
    "weight": 109
},
{
    "make": "Totem",
    "model": "Totem",
    "number": 1.5,
    "colour": "red",
    "size_l": 31.6,
    "size_u": 52.2,
    "head_width": 41,
    "strength": 13,
    "weight": 132.5
},
{
    "make": "Totem",
    "model": "Totem",
    "number": 1.8,
    "colour": "orange",
    "size_l": 39.7,
    "size_u": 64.2,
    "head_width": "",
    "strength": 13,
    "weight": 144
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 0,
    "colour": "Blue",
    "size_l": 14,
    "size_u": 22.54,
    "head_width": 42,
    "strength": 11,
    "weight": 87
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 0.5,
    "colour": "Red",
    "size_l": 16.56,
    "size_u": 26.66,
    "head_width": 42,
    "strength": 11,
    "weight": 91
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 1,
    "colour": "Gold",
    "size_l": 19.71,
    "size_u": 31.73,
    "head_width": 46,
    "strength": 11,
    "weight": 98
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 1.5,
    "colour": "Silver",
    "size_l": 23.59,
    "size_u": 37.98,
    "head_width": 48,
    "strength": 12,
    "weight": 106
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 2,
    "colour": "Red",
    "size_l": 28.41,
    "size_u": 45.73,
    "head_width": 50,
    "strength": 12,
    "weight": 111
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 2.5,
    "colour": "Gold",
    "size_l": 34.4,
    "size_u": 55.39,
    "head_width": 53,
    "strength": 12,
    "weight": 131
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 3,
    "colour": "Purple",
    "size_l": 41.9,
    "size_u": 67.47,
    "head_width": 53,
    "strength": 12,
    "weight": 145
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 3.5,
    "colour": "Blue",
    "size_l": 51.34,
    "size_u": 82.65,
    "head_width": 60,
    "strength": 12,
    "weight": 178
},
{
    "make": "Wildcountry",
    "model": "Helium",
    "number": 4,
    "colour": "Silver",
    "size_l": 63.25,
    "size_u": 101.83,
    "head_width": 60,
    "strength": 12,
    "weight": 221
},
{
    "make": "Wildcountry",
    "model": "New Friend",
    "number": 0.5,
    "colour": "Purple",
    "size_l": 20.6,
    "size_u": 34.5,
    "head_width": 47,
    "strength": 10,
    "weight": 98
},
{
    "make": "Wildcountry",
    "model": "New Friend",
    "number": 0.75,
    "colour": "Green",
    "size_l": 25.8,
    "size_u": 43,
    "head_width": 50,
    "strength": 10,
    "weight": 115
},
{
    "make": "Wildcountry",
    "model": "New Friend",
    "number": 1,
    "colour": "Red",
    "size_l": 31.7,
    "size_u": 53.6,
    "head_width": 52,
    "strength": 10,
    "weight": 134
},
{
    "make": "Wildcountry",
    "model": "New Friend",
    "number": 2,
    "colour": "Gold",
    "size_l": 41.5,
    "size_u": 69.3,
    "head_width": 57,
    "strength": 10,
    "weight": 159
},
{
    "make": "Wildcountry",
    "model": "New Friend",
    "number": 3,
    "colour": "Blue",
    "size_l": 52.7,
    "size_u": 88,
    "head_width": 60,
    "strength": 10,
    "weight": 202
},
{
    "make": "Wildcountry",
    "model": "New Friend",
    "number": 4,
    "colour": "Grey",
    "size_l": 66.8,
    "size_u": 112.1,
    "head_width": 75,
    "strength": 10,
    "weight": 283
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": "00",
    "colour": "Gold",
    "size_l": 10,
    "size_u": 16,
    "head_width": 60,
    "strength": 10,
    "weight": 60
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 0,
    "colour": "Blue",
    "size_l": 13,
    "size_u": 19,
    "head_width": 79,
    "strength": 14,
    "weight": 79
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 0.5,
    "colour": "Red",
    "size_l": 17,
    "size_u": 24,
    "head_width": 85,
    "strength": 14,
    "weight": 85
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 1,
    "colour": "Gold",
    "size_l": 19,
    "size_u": 29,
    "head_width": 95,
    "strength": 14,
    "weight": 95
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 1.25,
    "colour": "Purple",
    "size_l": 21,
    "size_u": 33,
    "head_width": 98,
    "strength": 14,
    "weight": 98
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 1.5,
    "colour": "Silver",
    "size_l": 23,
    "size_u": 35,
    "head_width": 98,
    "strength": 14,
    "weight": 98
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 1.75,
    "colour": "Green",
    "size_l": 25,
    "size_u": 41,
    "head_width": 107,
    "strength": 14,
    "weight": 107
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 2,
    "colour": "Red",
    "size_l": 29,
    "size_u": 44,
    "head_width": 111,
    "strength": 14,
    "weight": 111
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 2.5,
    "colour": "Gold",
    "size_l": 33,
    "size_u": 55,
    "head_width": 122,
    "strength": 14,
    "weight": 122
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 3,
    "colour": "Purple",
    "size_l": 43,
    "size_u": 66,
    "head_width": 155,
    "strength": 14,
    "weight": 155
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 3.5,
    "colour": "Blue",
    "size_l": 51,
    "size_u": 82,
    "head_width": 178,
    "strength": 14,
    "weight": 178
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 4,
    "colour": "Silver",
    "size_l": 64,
    "size_u": 100,
    "head_width": 217,
    "strength": 14,
    "weight": 217
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 5,
    "colour": "Red",
    "size_l": 84,
    "size_u": 138,
    "head_width": 348,
    "strength": 14,
    "weight": 339
},
{
    "make": "Wildcountry",
    "model": "Technical Friend",
    "number": 6,
    "colour": "Green",
    "size_l": 118,
    "size_u": 194,
    "head_width": 533,
    "strength": 14,
    "weight": 533
},
{
    "make": "Wildcountry",
    "model": "Zero",
    "number": 1,
    "colour": "Purple",
    "size_l": 5.5,
    "size_u": 7.8,
    "head_width": "",
    "strength": 3,
    "weight": 25
},
{
    "make": "Wildcountry",
    "model": "Zero",
    "number": 2,
    "colour": "Green",
    "size_l": 7,
    "size_u": 9.8,
    "head_width": "",
    "strength": 4,
    "weight": 32
},
{
    "make": "Wildcountry",
    "model": "Zero",
    "number": 3,
    "colour": "Silver",
    "size_l": 8.5,
    "size_u": 12.2,
    "head_width": "",
    "strength": 6,
    "weight": 44
},
{
    "make": "Wildcountry",
    "model": "Zero",
    "number": 4,
    "colour": "Gold",
    "size_l": 10.3,
    "size_u": 16,
    "head_width": "",
    "strength": 6,
    "weight": 50
},
{
    "make": "Wildcountry",
    "model": "Zero",
    "number": 5,
    "colour": "Blue",
    "size_l": 13,
    "size_u": 19,
    "head_width": "",
    "strength": 9,
    "weight": 66
},
{
    "make": "Wildcountry",
    "model": "Zero",
    "number": 6,
    "colour": "Red",
    "size_l": 17,
    "size_u": 24,
    "head_width": "",
    "strength": 9,
    "weight": 70
}
]

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = margin.top + margin.bottom;

var data  = [],
    selectedData = [];

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var container = d3.select("#container");

d3.select(window)
  .on("resize", function() {
    width = container.node().getBoundingClientRect().width;
    update(selectedData);
  });

function camId(d) {
    let str = `${d.make}${d.model}${d.number}`;
    return str.replace(/\s/g,'');
}

function camGroup(d) {
    let str = d.make + d.model;
        return str.replace(/\s/g,'').trim();
}

var x = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.size_u)])
    .range([0, width]);

var y = d3.scaleBand() // not being used currently
    .domain(d3.range(0, data.length))
    .range([0, height]);

var groupCams = d3.nest()
    .key(camGroup)
    .entries(allcams);

var checkboxDivs = d3.select(".cam-checkboxes")
    .selectAll("div")
    .data(groupCams)
    .enter().append("div").attr("class", "checkbox-columns")
    .each( function(d) {
        d3.select(this) .append("label")
            .text((d) => d.values[0].make + d.values[0].model )
            .attr("for", d.key)
            .attr("class", "cam_group_label")
        .append("input")
            .attr("class", "cam_group")
            .attr("type", "checkbox")
            .property("checked", false)
            .attr("id", d.key)
            .on("change", function(d) { 
                changeMakeModelSelection("."+d.key, this);
            });

        d3.select(this).selectAll("label")
            .data((d) => d.values)
            .enter().append("label")
                .attr("class", "cam_label")
                .text((d) => d.number)
                .attr("for", camId )
            .append("input")
                .attr("type", "checkbox")
                .attr("class", d.key + " cam_checkbox")
                .property("checked", false)
                .attr("id", camId )
                .on("change", function(d)
                    { changeSelection(d, this.checked); });
    });
    
var xAxis = d3.axisTop(x);
// Might want a y-axis? probably just bounding box
// var yAxis = d3.axisLeft(y);

var theXaxis = chart.append("g")
    .attr("class", "x axis");
    // .attr("transform", "translate(0,-10)");

function update(data){
    x.domain([0, d3.max(data, (d) => d.size_u)]);
    x.range([0, width]);

    height = ((data.length +1 )* 20 + margin.top + margin.bottom);
    chart.attr("height", height);

    chart.select(".x")
        .call(xAxis);

    var bars = chart.selectAll("rect")
        .data(data, (d) => d.id );

    bars.enter().append("rect")
        .attr("fill", (d) => d.colour.toLowerCase())
        .attr("stroke", (d) => d.colour.toLowerCase())
        .attr("height", 10)
        .attr("y", (d,i) => 10 + i * 20)
    .merge(bars)
        .attr("x", (d) => x(d.size_l))
        .attr("width", (d) => x(d.size_u - d.size_l) );

    bars.exit().remove();
}

function changeSelection(datum, isChecked) {
    isChecked ? selectedData.push(datum) : selectedData = selectedData.filter( (i) => camId(i) !== camId(datum) );
    update(selectedData);
}

function changeMakeModelSelection(makeModelClass, parentCheckBox) {
    // If a makeModel selectAll checkbox is ticked  [ ] -> [X] then:
    //      * check all boxes for cams of that make & model
    //      * add all cams that were not previously checked to selectedData
    // If a makeModel selectAll checkbox is unticked  [X] -> [ ] then:
    //      do opposite
    d3.selectAll(makeModelClass)
        .each( function(d) {
            let isChecked = d3.select(this).node().checked;
            if( parentCheckBox.checked && !isChecked) {
                selectedData.push(d); 
            }
            if ( !parentCheckBox.checked && isChecked ) {
                // remove from array if alrady in it
                selectedData = selectedData.filter( (i) => {
                    return camId(i) !== camId(d);
                });
            }
        })
    .property("checked", parentCheckBox.checked);
    update(selectedData);
}

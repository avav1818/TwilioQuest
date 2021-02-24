#!/usr/bin/local/python3

import sys

num1 = sys.argv[1]
num2 = sys.argv[2]

total = int(num1) + int(num2)

if (total <= 0):
    print("You have chosen the path of destitution.")
elif (total >= 1) and (total <= 100):
    print("You have chosen the path of plenty.")
else:
    print("You have chosen the path of excess.")

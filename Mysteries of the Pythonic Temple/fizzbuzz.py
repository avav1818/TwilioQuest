#!/usr/bin/local/python3

import sys 

entries = sys.argv
entries.pop(0)
entries_list = list(map(int, entries))


for i in range(len(entries_list)):
    if (entries_list[i] % 3 == 0) and (entries_list[i] % 5 == 0):
        print("fizzbuzz")
    elif (entries_list[i] % 5 == 0):
        print("buzz")
    elif (entries_list[i] % 3 == 0):
        print("fizz")
    else:
        print(entries_list[i])

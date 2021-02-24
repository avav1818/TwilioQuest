#!/usr/bin/local/python3

import sys

order = sys.argv
order.pop(0)

for i, v in enumerate(order, start=1):
    print(f"{i}. {v}")

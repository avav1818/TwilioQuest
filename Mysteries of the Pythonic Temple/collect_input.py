#!/usr/local/bin/python3

import sys

# Prints first second and third command line arguments
# sys.argv() object is a list of string that contain all arguments passed into the python3 command on the terminal
# Output the file name with sys.argv([0])
print("{}".format(sys.argv[1]))
print("{}".format(sys.argv[2]))
print("{}".format(sys.argv[3]))

# Sys documentation:https://docs.python.org/3/library/sys.html 

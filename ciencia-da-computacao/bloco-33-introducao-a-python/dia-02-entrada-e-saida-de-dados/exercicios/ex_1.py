from operator import indexOf
import sys

def name_tree(name):
    '''Returns an inverted tree with the name'''
    print(name)
    if (len(name) > 1):
      name_tree(name[:-1])

def main():
    name = sys.argv[1]
    name_tree(name)

main()
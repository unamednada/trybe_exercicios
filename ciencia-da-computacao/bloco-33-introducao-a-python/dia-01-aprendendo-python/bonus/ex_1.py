from functools import reduce


def menor_elemento(lista):
    return reduce(lambda x, y: x if x < y else y, lista)
from functools import reduce


def media_da_lista(lista):
    '''Retorna a média dos números da lista'''
    return reduce(lambda x, y: x + y, lista) / len(lista)
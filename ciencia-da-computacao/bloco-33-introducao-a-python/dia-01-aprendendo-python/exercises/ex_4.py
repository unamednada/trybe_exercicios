from functools import reduce


def nome_mais_longo(nomes):
    '''Retorna o nome mais longo da lista'''
    return reduce(lambda x, y: x if len(x) > len(y) else y, nomes)
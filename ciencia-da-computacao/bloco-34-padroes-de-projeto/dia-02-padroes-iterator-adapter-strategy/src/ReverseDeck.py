from collections.abc import Iterator, Iterable
from Deck import Baralho


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._indice = len(cartas) - 1

    def __next__(self):
        try:
            carta = self._cartas[self._indice]
        except IndexError:
            raise StopIteration()
        else:
            self._indice -= 1
            return carta



class BaralhoInverso(Baralho):
    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas)


if __name__ == '__main__':
    baralho = BaralhoInverso()
    for carta in baralho:
        print(carta)

from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable

class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, strategy):
        self._cartas = cartas
        self._indice = 0
        self._strategy = strategy
    
    def __next__(self):
        try:
            carta = self._cartas[self._indice]
        except IndexError:
            raise StopIteration()
        else:
            self._indice = self._strategy.next(self._indice)
            return carta


class Strategy(ABC):
    @abstractmethod
    def next(self, indice):
        raise NotImplementedError


class RegularStrategy(Strategy):
    @classmethod
    def next(self, indice):
        return indice + 1


class InversoStrategy(Strategy):
    @classmethod
    def next(self, indice):
        return indice - 1


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, strategy=RegularStrategy):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._strategy = strategy

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self._strategy)


if __name__ == '__main__':
    baralho = Baralho()

    print('Baralho normal:\n')
    for carta in baralho:
        print(carta)

    print('\nBaralho inverso:\n')
    for carta in Baralho(strategy=InversoStrategy):
        print(carta)
import numpy as np

class Estatistica:
    @classmethod
    def media(cls, lista):
        return np.mean(np.array(lista))
    
    @classmethod
    def mediana(cls, lista):
        return np.median(np.array(lista))
    
    @classmethod
    def moda(cls, lista):
        return np.bincount(np.array(lista)).argmax()

if __name__ == "__main__":
    lista = [1, 3, 3, 3, 5, 12, 5, 5, 9, 5, 1, 1, 2, 2, 3, 5, 1, 1, 5, 5, 6, 12, 12, 1, 3, 12, 3, 3]
    print(Estatistica.media(lista))
    print(Estatistica.mediana(lista))
    print(Estatistica.moda(lista))

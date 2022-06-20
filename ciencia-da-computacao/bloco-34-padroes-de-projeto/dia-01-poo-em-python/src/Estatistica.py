import numpy as np

class Estatistica:
    def __init__(self, lista):
        self.lista = np.array(lista)
    
    def media(self):
        return np.mean(self.lista)
    
    def mediana(self):
        return np.median(self.lista)
    
    def moda(self):
        return np.bincount(self.lista).argmax()

if __name__ == "__main__":
    lista = [1, 1, 2, 2, 2, 6, 7, 8, 1, 1]
    estatistica = Estatistica(lista)
    print(estatistica.media())
    print(estatistica.mediana())
    print(estatistica.moda())
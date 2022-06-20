from abc import ABC, abstractmethod

class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Triangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return (self.base * self.altura) / 2

    def perimetro(self):
        return self.base + self.altura + (self.base * self.altura) / 2


if __name__ == "__main__":
    quadrado = Quadrado(5)
    retangulo = Retangulo(5, 10)
    triangulo = Triangulo(5, 10)
    print(quadrado.area())
    print(quadrado.perimetro())
    print(retangulo.area())
    print(retangulo.perimetro())
    print(triangulo.area())
    print(triangulo.perimetro())
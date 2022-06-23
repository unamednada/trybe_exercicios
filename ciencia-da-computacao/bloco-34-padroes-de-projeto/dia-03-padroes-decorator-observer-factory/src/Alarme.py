from abc import ABC, abstractmethod


class Alarme(ABC):
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotina(self, rotina):
        self.__rotinas.append(rotina)

    def acionar(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Despertando alarme")
        self.acionar()


class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        raise NotImplementedError


class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.__alarme = alarme
        self.__alarme.adicionar_rotina(self)

    def acionar(self):
        print("Preparando café")


class AcionadorLuz(Acionador):
    def __init__(self, alarme):
        self.__alarme = alarme
        self.__alarme.adicionar_rotina(self)

    def acionar(self):
        print("Ligando luz")


class AcionadorComputador(Acionador):
    def __init__(self, alarme):
        self.__alarme = alarme
        self.__alarme.adicionar_rotina(self)

    def acionar(self):
        print("Ligando computador")


if __name__ == "__main__":
    alarme_manha = Alarme()
    AcionadorLuz(alarme_manha)
    AcionadorCafeteira(alarme_manha)
    AcionadorComputador(alarme_manha)

    alarme_manha.despertar()

    alarme_tarde = Alarme()
    AcionadorCafeteira(alarme_tarde)

    alarme_tarde.despertar()

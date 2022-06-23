from abc import ABC, abstractmethod


class Alarme(ABC):
    def __init__(self):
        self.__rotinas = []
    
    def adiciona_rotina(self, rotina):
        self.__rotinas.append(rotina)
    
    
from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'a') as arquivo:
            arquivo.write(f'{datetime.now()} - {msg}\n')


class LogEmConsole(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(f'{datetime.now()} - {msg}')


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)
    
    def adicionar_manipulador(self, manipulador: ManipuladorDeLog):
        self.__manipuladores.add(manipulador)
    
    def info(self, msg):
        self.__log('INFO', msg)
    
    def alerta(self, msg):
        self.__log('ALERTA', msg)
    
    def erro(self, msg):
        self.__log('ERRO', msg)
    
    def debug(self, msg):
        self.__log('DEBUG', msg)
    
    def __log(self, tipo, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(tipo, msg))
    
    def __formatar(self, tipo, msg):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f'[{tipo}] [{data}] - {msg}'

if __name__ == '__main__':
    log = Log([LogEmConsole(), LogEmArquivo()])
    log.info('Informação')
    log.alerta('Alerta')
    log.erro('Erro')
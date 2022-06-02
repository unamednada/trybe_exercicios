from ex_1 import maior_de_dois
from ex_2 import media_da_lista
from ex_3 import imprime_quadrado


dois = [1, 1]
lista = [3, 15, 2, -11, 4, 7, 8, 9, 10, -5]
n = 5


num_maior_de_dois = maior_de_dois(dois[0], dois[1])
num_media_da_lista = media_da_lista([num * 2 for num in lista])


print(num_maior_de_dois)
print(num_media_da_lista)
imprime_quadrado(n)
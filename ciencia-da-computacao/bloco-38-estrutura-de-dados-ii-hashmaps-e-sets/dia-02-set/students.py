from vector_set import VectorSet


estudantes = VectorSet([1, 2, 3, 4, 5, 6, 7])
lista_1 = VectorSet([1, 4, 7, 3])
lista_2 = VectorSet([3, 1, 6])


print(estudantes.difference(lista_1))
print(lista_1.intersection(lista_2))
print(lista_1.union(lista_2))
print(estudantes.difference(lista_1.union(lista_2)))

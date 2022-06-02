def imprime_triangulo_recursiva(n):
    if n > 0:
        imprime_triangulo_recursiva(n - 1)
        print('*' * n)
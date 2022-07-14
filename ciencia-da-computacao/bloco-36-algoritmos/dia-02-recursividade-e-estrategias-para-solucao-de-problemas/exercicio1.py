def count_even(n):
    """
    Função que conta quantos números pares existem entre 0 e n
    """
    count = 0
    for i in range(n+1):
        if i % 2 == 0:
            count += 1
    return count
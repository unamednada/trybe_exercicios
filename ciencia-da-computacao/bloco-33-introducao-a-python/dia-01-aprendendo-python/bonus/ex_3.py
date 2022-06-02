def soma_ate_n(n):
    if n == 0:
        return 0
    else:
        return n + soma_ate_n(n - 1)
def count_even(n):
    count = 0
    for i in range(1, n+1):
        if i % 2 == 0:
            count += 1
    return count


def recursive_count_even(n):
    if n == 0:
        return 0
    return int(n % 2 == 0) + recursive_count_even(n-1)


def recursive_max(lista):
    if len(lista) == 1:
        return lista[0]
    return max(lista[0], recursive_max(lista[1:]))


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


def is_prime_recursive(n, a = 2):
    if n in [1, a]:
        return True
    if n % a == 0:
        return False
    return is_prime_recursive(n, a + 1)


def recursive_reverse(list):
    if len(list) == 1:
        return list
    return recursive_reverse(list[1:]) + [list[0]]


if __name__ == '__main__':
    print(recursive_reverse([1, 2, 3, 4, 5]))
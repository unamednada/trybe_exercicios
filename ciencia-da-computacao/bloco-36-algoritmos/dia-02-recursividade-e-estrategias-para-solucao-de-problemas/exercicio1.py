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


if __name__ == '__main__':
    print(count_even(10))
    print(recursive_count_even(10))
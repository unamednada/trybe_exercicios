from random import randint
from functools import reduce

def generate_hundred_random_average(n):
    hundred_random_average = []
    for i in range(100):
        current_average = reduce(lambda x, y: x + y, [randint(0, 9) for x in range(n)])
        hundred_random_average.append(current_average)
    return hundred_random_average


if __name__ == "__main__":
    print(generate_hundred_random_average(10))
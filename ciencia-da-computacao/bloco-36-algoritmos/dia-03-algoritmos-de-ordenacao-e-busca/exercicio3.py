from random import shuffle
from cronometro import Cronometro


ordenados = list(range(100))
inversos = list(reversed(ordenados))
aleatorios = shuffle(list(ordenados))


def selection_sort(arr):
    for i in range(len(arr)):
        menor = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[menor]:
                menor = j
        arr[menor], arr[i] = arr[i], arr[menor]

    return arr


def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i
        while j > 0 and arr[j] < arr[j - 1]:
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
            j -= 1

    return arr


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 1_000_000):

        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]  # copia dos ordenados
        shuffle(random_numbers)  # embaralha eles

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"ordenada de {input} números"):
            algorithm(sorted_numbers)

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"inversamente ordenada de {input} números"):
            algorithm(reversed_sorted_numbers)

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"aleatória de {input} números"):
            algorithm(random_numbers)

        print("*" * 50)
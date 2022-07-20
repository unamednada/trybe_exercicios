animals = ["zebra", "macaco", "elefante", "arara", "javali"]

def bubble_sort(list, iterations):
    for i in range(iterations):
        for j in range(len(list) - 1):
            if list[j] > list[j + 1]:
                list[j], list[j + 1] = list[j + 1], list[j]
    return list

bubble_sort(animals, 2)
print(animals)
animals = ["zebra", "macaco", "elefante", "arara", "javali"]

def bubble_sort(arr, iterations):
    for i in range(iterations):
        for j in range(len(arr) - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

bubble_sort(animals, 2)
print(animals)
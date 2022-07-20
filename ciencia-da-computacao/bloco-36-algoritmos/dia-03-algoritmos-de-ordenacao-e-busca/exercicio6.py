from exercicio5 import binary_search_iterative


print(binary_search_iterative([1, 1, 1, 1, 0, 0, 0], 0))
print(binary_search_iterative([1, 1, 0, 0, 0, 0, 0], 0))


def find_first_bad_version(arr):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if not arr[mid]:
            high = mid - 1
        else:
            low = mid + 1
    return low


print(find_first_bad_version([1, 1, 1, 1, 0, 0, 0]))
print(find_first_bad_version([1, 1, 0, 0, 0, 0, 0]))
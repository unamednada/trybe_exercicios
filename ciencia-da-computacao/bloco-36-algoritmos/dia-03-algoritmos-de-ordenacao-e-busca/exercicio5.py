from operator import indexOf


def binary_search_recursive(list, item, low, high):
    if low > high:
        return False
    mid = (low + high) // 2
    if list[mid] == item:
        return indexOf(list, item)
    elif list[mid] > item:
        return binary_search_recursive(list, item, low, mid - 1)
    else:
        return binary_search_recursive(list, item, mid + 1, high)


def binary_search_iterative(list, item):
    low = 0
    high = len(list) - 1
    while low <= high:
        mid = (low + high) // 2
        if list[mid] == item:
            return indexOf(list, item)
        elif list[mid] > item:
            high = mid - 1
        else:
            low = mid + 1
    return False

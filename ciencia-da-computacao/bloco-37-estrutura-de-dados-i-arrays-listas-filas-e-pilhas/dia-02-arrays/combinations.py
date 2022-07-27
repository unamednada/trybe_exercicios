def cool_combinations(lst):
    combinations = 0
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            if lst[i] == lst[j]:
                combinations += 1
    return combinations

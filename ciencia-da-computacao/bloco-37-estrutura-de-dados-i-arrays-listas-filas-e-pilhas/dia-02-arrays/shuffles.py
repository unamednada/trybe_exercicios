def divide_and_shuffle(lst):
    """
    Divide a list into two halves and shuffle them.
    """
    half_i = len(lst) // 2
    half_1 = lst[:half_i]
    half_2 = lst[half_i:]
    return [half[i] for i in range(len(half_1)) for half in (half_1, half_2)]
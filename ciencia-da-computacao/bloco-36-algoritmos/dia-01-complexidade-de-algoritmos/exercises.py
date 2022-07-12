import time


# Original algorithm

def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False


def better_contains_duplicate(numbers):
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False


if __name__ == "__main__":
    five_thousand = list(range(5000))
    ten_thousand = list(range(10000))
    hundred_thousand = list(range(100000))

    print("\nCheck results:")
    print("Original -> ", contains_duplicate(five_thousand))
    print("Better -> ", better_contains_duplicate(five_thousand))

    print('\nOriginal algorithm:')
    start_time = time.time()
    contains_duplicate(five_thousand)
    print(f"Original -> 5 mil: {(time.time() - start_time)} seconds")
    start_time = time.time()
    contains_duplicate(ten_thousand)
    print(f"Original -> 10 mil: {(time.time() - start_time)} seconds")
    start_time = time.time()
    contains_duplicate(hundred_thousand)
    print(f"Original -> 100 mil: {(time.time() - start_time)} seconds")

    print('\nBetter algorithm:')
    start_time = time.time()
    better_contains_duplicate(five_thousand)
    print(f"Better -> 5 mil: {(time.time() - start_time)} seconds")
    start_time = time.time()
    better_contains_duplicate(ten_thousand)
    print(f"Better -> 10 mil: {(time.time() - start_time)} seconds")
    start_time = time.time()
    better_contains_duplicate(hundred_thousand)
    print(f"Better -> 100 mil: {(time.time() - start_time)} seconds")
    
    print('------------- END OF PROGRAM -------------')
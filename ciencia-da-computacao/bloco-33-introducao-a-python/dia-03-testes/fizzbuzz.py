def fizz_buzz_sequence(n):
    """
    Return a list of the first n fizzbuzz numbers.
    Throws an exception if n is not a positive integer.
    """

    # Check that n is a positive integer
    if not isinstance(n, int) or n < 1:
        raise ValueError("n must be a positive integer")

    # Initialize the list
    fizzbuzz_list = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            fizzbuzz_list.append("FizzBuzz")
        elif i % 3 == 0:
            fizzbuzz_list.append("Fizz")
        elif i % 5 == 0:
            fizzbuzz_list.append("Buzz")
        else:
            fizzbuzz_list.append(i)
    return fizzbuzz_list

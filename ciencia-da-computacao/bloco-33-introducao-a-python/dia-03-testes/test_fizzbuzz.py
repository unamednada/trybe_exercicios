import pytest
from fizzbuzz import fizz_buzz_sequence

def test_fizz_buzz_should_throw_exception_if_n_is_not_a_positive_integer():
    with pytest.raises(ValueError):
        fizz_buzz_sequence(-1)
    with pytest.raises(ValueError):
        fizz_buzz_sequence(0)
    with pytest.raises(ValueError):
        fizz_buzz_sequence(1.5)

def test_fizz_buzz_should_return_list_of_integers():
    assert fizz_buzz_sequence(2) == [1, 2]

def test_fizz_buzz_should_replace_divisible_by_3_with_fizz():
    assert fizz_buzz_sequence(3) == [1, 2, "Fizz"]

def test_fizz_buzz_should_replace_divisible_by_5_with_buzz():
    assert fizz_buzz_sequence(5) == [1, 2, "Fizz", 4, "Buzz"]

def test_fizz_buzz_should_replace_divisible_by_3_and_5_with_fizzbuzz():
    assert fizz_buzz_sequence(15) == [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
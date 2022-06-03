from create_phone_number import create_phone_number

def test_create_phone_number_should_return_phone_number_from_string():
    assert create_phone_number('AD') == '23'

def test_create_phone_number_should_return_number_one_digit():
    assert create_phone_number('1') == '1'

def test_create_phone_number_should_return_hifen_between_numbers():
    assert create_phone_number('GUSTAVO-DIAS') == '4878286-3427'

def test_create_phone_number_should_return_correct_phone_number():
    assert create_phone_number('TRYBE-VQV-1') == '87923-878-1'
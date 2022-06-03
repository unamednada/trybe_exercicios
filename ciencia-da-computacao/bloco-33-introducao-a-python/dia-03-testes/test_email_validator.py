import pytest
from email_validator import validate_email

def test_validate_email_should_throw_exception_if_email_is_empty():
    with pytest.raises(Exception, match=r'Email cannot be empty'):
        validate_email('')


def test_validate_email_should_throw_exception_if_email_is_not_a_string():
    with pytest.raises(Exception, match=r'Email must be a string'):
        validate_email(1)


def test_validate_email_should_return_true_if_email_is_valid():
    assert validate_email('email@mail.com') == True


def test_validate_email_should_return_false_if_email_is_missing_period():
    assert validate_email('email@mail') == False


def test_validate_email_should_return_false_if_email_is_missing_at_symbol():
    assert validate_email('email.com') == False


def test_validate_email_should_return_false_if_email_is_missing_username():
    assert validate_email('@mail.com') == False


def test_validate_email_should_return_false_if_email_is_missing_domain():
    assert validate_email('email@') == False

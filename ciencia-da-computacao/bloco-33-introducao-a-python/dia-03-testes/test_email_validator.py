import pytest
from email_validator import validate_email

def test_validate_email_should_throw_exception_if_email_is_empty():
    with pytest.raises(Exception, match=r'Email cannot be empty'):
        validate_email('')


def test_validate_email_should_throw_exception_if_email_is_not_a_string():
    with pytest.raises(Exception, match=r'Email must be a string'):
        validate_email(1)


def test_validate_email_should_throw_exception_if_email_is_missing_username():
    with pytest.raises(Exception, match=r'Email is invalid'):
        validate_email('@mail.com')


def test_validate_email_should_throw_exception_if_email_is_missing_domain():
    with pytest.raises(Exception, match=r'Email is invalid'):
        validate_email('user@')


def test_validate_email_should_throw_exception_if_email_is_missing_tld():
    with pytest.raises(Exception, match=r'Email is invalid'):
        validate_email('user@mail')


def test_validate_email_should_throw_exception_if_email_is_missing_username_and_domain():
    with pytest.raises(Exception, match=r'Email is invalid'):
        validate_email('@')


def test_validate_email_should_throw_exception_if_email_is_missing_username_and_tld():
    with pytest.raises(Exception, match=r'Email is invalid'):
        validate_email('@mail')


def test_validate_email_should_not_throw_exception_if_email_is_valid():
    assert validate_email('valid@mail.com') == 0
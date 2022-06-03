from email_list_cleaner import email_list_cleaner

def test_email_list_cleaner_should_return_empty_list_if_input_is_empty():
    assert email_list_cleaner([]) == []


def test_email_list_claner_should_return_one_valid_email_if_input_is_one_valid_email():
    assert email_list_cleaner(['email@valid.com']) == ['email@valid.com']


def test_email_list_cleaner_should_return_empty_list_if_input_is_one_invalid_email():
    assert email_list_cleaner(['email@invalid']) == []


def test_email_list_should_return_correct_list_if_input_is_one_valid_and_one_invalid_email():
    assert email_list_cleaner(['valid@valid.com', 'invalid']) == ['valid@valid.com']
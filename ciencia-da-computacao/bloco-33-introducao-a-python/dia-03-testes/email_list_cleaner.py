from email_validator import validate_email

def email_list_cleaner(email_list):
    """
    This function takes a list of emails and returns a list of valid emails.
    """

    valid_emails = []
    for email in email_list:
        try:
            validate_email(email)
        except:
            print('Invalid input: {}'.format(email))
        else:
            valid_emails.append(email)

        
    return valid_emails
import re

def validate_email(email):
    if not email:
        raise Exception('Email cannot be empty')
    elif not type(email) == str:
        raise Exception('Email must be a string')
    regex = r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
    if re.match(regex, email):
        return True
    else:
        return False
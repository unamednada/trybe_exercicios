def create_phone_number(string):
    '''
    Create a phone number from a string of letters
    '''
    converter = {
        'ABC' : 2,
        'DEF' : 3,
        'GHI' : 4,
        'JKL' : 5,
        'MNO' : 6,
        'PQRS' : 7,
        'TUV' : 8,
        'WXYZ' : 9
    }

    # map(lambda x: converter[x] or x, string)

    phone_number = ''
    for letter in string:
        for key in converter:
            if letter in key:
                phone_number += str(converter[key])
                break
        else:
            phone_number += letter  
    
    return phone_number
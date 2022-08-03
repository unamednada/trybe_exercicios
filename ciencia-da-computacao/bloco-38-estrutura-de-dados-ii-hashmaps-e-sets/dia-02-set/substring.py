def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


def better_longer_no_repeating_substring_len(string):
    string_list = list(string)
    biggest = 0
    substr = set()
    for index in range(len(string_list)):
        letter = string_list[index]
        if letter in substr:
            if len(substr) > biggest:
                biggest = len(substr)
            substr = set([letter])
            index = string_list.index(letter)
        else:
            substr.add(letter)
    if len(substr) > biggest:
        biggest = len(substr)
    return biggest


if __name__ == '__main__':
    print(better_longer_no_repeating_substring_len("serdevemuitolegalmasehprecisoestudarbastante"))
    print(longer_no_repeating_substring_len("serdevemuitolegalmasehprecisoestudarbastante"))

from itertools import combinations
from site import check_enableusersite


def how_many_chars_match(word_list, chars):
    final_length = 0
    for word in word_list:
        possible_combinations = combinations(list(chars), len(word))
        for combination in possible_combinations:
            if ''.join(combination) == word or ''.join(combination) == word[::-1]:
                final_length += len(word)
    
    return final_length


if __name__ == "__main__":
    words = ["cat", "bt", "hat", "tree"]
    chars = "atach"
    print(how_many_chars_match(words, chars))
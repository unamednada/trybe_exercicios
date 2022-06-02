from ex_2 import guess_scramble_game

def open_file(filename):
    with open(filename, "r") as file:
        return file.read().splitlines()

word_list = open_file("./exercicios/words.txt")
guess_scramble_game(word_list)
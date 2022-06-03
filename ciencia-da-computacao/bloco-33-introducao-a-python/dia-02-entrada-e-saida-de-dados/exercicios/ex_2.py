import random

def guess_scramble_game(list_of_words):
    word_of_choice = random.choice(list_of_words)
    scrambled_word = "".join(random.sample(word_of_choice, len(word_of_choice)))
    print(f"Guess the word: {scrambled_word}")
    while True:
        user_guess = input("Your guess: ")
        if user_guess == word_of_choice:
            print(f"{user_guess}!!! Exactly!")
            break
        else:
            print("You're not quite right, try again!")

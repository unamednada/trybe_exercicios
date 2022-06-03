import json
import random


def read_json(filename):
    """
    Read a json file and return a list of pokemon json objects
    """
    with open(filename) as f:
        return json.load(f)["results"]


def pokemons_to_name(pokemons_json):
    """
    Return a list of pokemon names from a list of pokemon json objects
    """
    return [pokemon['name'] for pokemon in pokemons_json]


def main():
    """Guess the pokemon game"""
    pokemon_names = pokemons_to_name(read_json('./pokemons.json'))
    pokemon_to_guess = random.choice(pokemon_names)
    print('Guess the pokemon!')
    hint = ''
    while len(hint) < len(pokemon_to_guess):
        guess = input('Guess the pokemon: ')
        if guess == pokemon_to_guess:
            print('You win!')
            break
        else:
            hint += pokemon_to_guess[len(hint)]
            print('Hint: ' + hint)


main()

from vector_set import VectorSet


entrada = {
  'Clara': [0, 1, 5, 9, 10],
  'Marco': [0, 2, 8, 9, 10]
}


def blefe_game(entrada):
    player_1 = VectorSet(list(entrada.values())[0])
    player_2 = VectorSet(list(entrada.values())[1])

    player_1_starting_score = player_1.difference(player_2).last_element
    player_2_starting_score = player_2.difference(player_1).last_element

    player_1_reductor = min(list((player_1.difference(player_2)).data))
    player_2_reductor = min(list((player_2.difference(player_1)).data))

    player_1_score = player_1_starting_score - player_1_reductor
    player_2_score = player_2_starting_score - player_2_reductor

    if player_1_score > player_2_score:
        return list(entrada.keys())[0]
    elif player_2_score > player_1_score:
        return list(entrada.keys())[1]
    else:
        return 'Draw'


print(blefe_game(entrada))

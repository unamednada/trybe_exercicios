managers = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: []
}


def caculate_score(manager_id, managers):
    score = 0
    for manager in managers[manager_id]:
        score += caculate_score(manager, managers)
    return score + 1


if __name__ == "__main__":
    print(list(map(lambda x: caculate_score(x, managers), managers)))
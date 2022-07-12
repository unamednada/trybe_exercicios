import time


# First Alternative

def battleship_checker(board, coordinates):
    (x, y) = coordinates
    if board[x][y] == 1:
        return True
    return False


# Second Alternative

def better_battleship_checker(board, coordinates):
    (x, y) = coordinates
    for line in board:
        if line[y] == 1:
            return True
    return False


if __name__ == "__main__":
    small_board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    large_board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    larger_board = [[0 for x in range(100)] for y in range(100)]
    infinite_board = [[0 for x in range(1000)] for y in range(1000)]

    print("\nCheck results:")
    print("First -> ", battleship_checker(small_board, (len(small_board) - 1, len(small_board) - 1)))
    print("Second -> ", better_battleship_checker(small_board, (len(small_board) - 1, len(small_board) - 1)))

    print('\nFirst:')
    start_time = time.time()
    battleship_checker(small_board, (len(small_board) - 1, len(small_board) - 1))
    print(f"First -> Small board: {(time.time() - start_time)} seconds")
    start_time = time.time()
    battleship_checker(large_board, (len(large_board) - 1, len(large_board) - 1))
    print(f"First -> Large board: {(time.time() - start_time)} seconds")
    start_time = time.time()
    battleship_checker(larger_board, (len(larger_board) - 1, len(larger_board) - 1))
    print(f"First -> Larger board: {(time.time() - start_time)} seconds")
    start_time = time.time()
    battleship_checker(infinite_board, (len(infinite_board) - 1, len(infinite_board) - 1))
    print(f"First -> Infinite board: {(time.time() - start_time)} seconds")

    print('\nSecond:')
    start_time = time.time()
    better_battleship_checker(small_board, (len(small_board) - 1, len(small_board) - 1))
    print(f"Second -> Small board: {(time.time() - start_time)} seconds")
    start_time = time.time()
    better_battleship_checker(large_board, (len(large_board) - 1, len(large_board) - 1))
    print(f"Second -> Large board: {(time.time() - start_time)} seconds")
    start_time = time.time()
    better_battleship_checker(larger_board, (len(larger_board) - 1, len(larger_board) - 1))
    print(f"Second -> Larger board: {(time.time() - start_time)} seconds")
    start_time = time.time()
    better_battleship_checker(infinite_board, (len(infinite_board) - 1, len(infinite_board) - 1))
    print(f"Second -> Infinite board: {(time.time() - start_time)} seconds")

    print('------------- END OF PROGRAM -------------')
import time


# First Alternative

def battleship_checker(board, coordinates):
    (x, y) = coordinates
    if board[x][y] == 1:
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
    print("Small board -> ", battleship_checker(small_board, (0, 0)))

    print('\nSmall board:')
    start_time = time.time()
    battleship_checker(small_board, (0, 0))
    print(f"Small board -> {(time.time() - start_time)} seconds")
    start_time = time.time()
    battleship_checker(large_board, (0, 0))
    print(f"Large board -> {(time.time() - start_time)} seconds")
    start_time = time.time()
    battleship_checker(larger_board, (0, 0))
    print(f"Larger board -> {(time.time() - start_time)} seconds")
    start_time = time.time()
    battleship_checker(infinite_board, (0, 0))
    print(f"Infinite board -> {(time.time() - start_time)} seconds")

    print('------------- END OF PROGRAM -------------')
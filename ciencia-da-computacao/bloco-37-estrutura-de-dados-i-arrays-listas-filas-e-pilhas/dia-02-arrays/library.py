def check_ss_number(entradas, saidas, instante):
    ss = 0
    for i in range(len(entradas)):
        if instante in range(entradas[i], saidas[i]):
            ss += 1
    return ss
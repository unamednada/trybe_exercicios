def preco_final(litros, combustivel):
    preco = preco_posto(litros, combustivel)
    desconto = calcula_preco_desconto(litros, combustivel)
    preco_final = preco * desconto
    return preco_final

def preco_posto(litros, combustivel):
    if combustivel == "A":
        preco = litros * 1.90
    elif combustivel == "G":
        preco = litros * 2.50
    return preco 

def calcula_preco_desconto(litros, combustivel):
    if combustivel == "A":
        if litros <= 20:
            desconto = 0.97
        else:
            desconto = 0.95
    elif combustivel == "G":
        if litros <= 20:
            desconto = 0.96
        else:
            desconto = 0.94
    return desconto
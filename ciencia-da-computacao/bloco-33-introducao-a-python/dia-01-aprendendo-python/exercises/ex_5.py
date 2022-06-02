def comprar_latas_de_tinta(area):
    """Retorna quantas latas necessárias pra pintar uma área e o valor total da compra"""
    LITROS_LATA = 18
    METROS_POR_LITRO = 3
    METROS_POR_LATA = LITROS_LATA * METROS_POR_LITRO
    PRECO_LATA = 80
    latas = area // METROS_POR_LATA or 1
    valor_total = latas * PRECO_LATA
    return (latas, valor_total)

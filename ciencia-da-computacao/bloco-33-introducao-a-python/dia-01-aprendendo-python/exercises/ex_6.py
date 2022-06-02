def identifica_triangulo(a, b, c):
    if a == b and b == c:
        return 'Equilátero'
    elif a == b or b == c or a == c:
        return 'Isósceles'
    elif e_triangulo(a, b, c):
        return 'Escaleno'
    else:
        return 'Não é um triângulo'

def e_triangulo(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        return True
    else:
        return False
const random = require('./random.js');

jest.mock('./random.js');

describe('Testa se a função randomToTest', () => {

  random.randomToTest.mockReturnValue(10);

  it('é chamada', () => {
    random.randomToTest();
    expect(random.randomToTest).toHaveBeenCalled();
  })

  it('retorna 10 por padrão', () => {
    expect(random.randomToTest()).toBe(10);
    expect(random.randomToTest).toHaveBeenCalledTimes(2);
  })

  it('retorna a divisão do primeiro pelo segundo parâmetro', () => {
    random.randomToTest.mockImplementationOnce((a, b) => a / b);
    expect(random.randomToTest(4, 2)).toBe(2);
    expect(random.randomToTest).toHaveBeenCalledWith(4, 2);
    expect(random.randomToTest(4, 2)).toBe(10);
    expect(random.randomToTest).toHaveBeenCalledTimes(4);
  })

  it('retorna a multiplicação de 3 parâmetros', () => {
    random.randomToTest.mockImplementation((a, b, c) => a * b * c);
    expect(random.randomToTest(1, 2, 3)).toBe(6);
    expect(random.randomToTest).toHaveBeenCalledTimes(5);
    expect(random.randomToTest).toHaveBeenLastCalledWith(1, 2, 3);
    random.randomToTest.mockReset();
  })

  it('após resetada, retorna o dobro de um único parâmetro', () => {
    expect(random.randomToTest()).toBe(undefined);
    random.randomToTest.mockImplementation((par) => par * 2);
    expect(random.randomToTest(2)).toBe(4);
    expect(random.randomToTest).toHaveBeenLastCalledWith(2);
    expect(random.randomToTest).toHaveBeenCalledTimes(2);
  })

})


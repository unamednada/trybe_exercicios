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
  })

})


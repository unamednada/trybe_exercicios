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

})
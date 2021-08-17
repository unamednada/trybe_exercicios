const sum = require('./sum.js');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {

  it('O retorno de sum(4, 5) é 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('O retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).not.toBe(true);
  });

  it('A função sum() lança erro quando um dos parâmetros é uma string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

});
const sum = require('./sum.js');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {

  it('O retorno de sum(4, 5) é 9', () => {
    expect(9).toBe(sum(4, 5));
  });

});
const { encode, decode } = require('./encode-decode.js');

describe('Verifica se encode se comporta como esperado', () => {

  it('Verifica se encode é uma função', () => {
    expect('function').toBe(typeof encode);
  });

  it('Verifica se as vogais a, e, i, o, u, são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const numbers = ['1', '2', '3', '4', '5'];
    vogais.forEach((vogal, index) => {
      expect(encode(vogal)).toBe(numbers[index]);
    })
  })
})

describe('Verifica se decode se comporta como esperado', () => {

  it('Verifica se decode é uma função', () => {
    expect('function').toBe(typeof decode);
  });

})
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
    });
  });

  it('Verifica se as demais letras não são convertidas', () => {
    const randomLetters = ['b', 'r', 'z', 'h', 'y'];
    expect(randomLetters.map((letter) => !isNaN(encode(letter)))).toEqual(expect.arrayContaining([false]));
  });

  it('Verifica se a string passada como parâmetro tem o mesmo número de caracteres que a string retornada', () => {
    const myStr = 'this is a string of length 29';
    expect(encode(myStr).length).toBe(myStr.length);
  });

});

describe('Verifica se decode se comporta como esperado', () => {

  it('Verifica se decode é uma função', () => {
    expect('function').toBe(typeof decode);
  });

  it('Verifica se os números 1, 2, 3, 4, 5 são convertidos em a, e, i, o, u, respectivamente', () => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const numbers = ['1', '2', '3', '4', '5'];
    numbers.forEach((number, index) => {
      expect(decode(number)).toBe(vogais[index]);
    });
  });

  it('Verifica se os demais números não são convertidos', () => {
    const randomNumbers = ['7', '0', '8', '9', '6'];
    expect(randomNumbers.map((number) => (decode(number)))).toEqual(expect.arrayContaining([...randomNumbers]));
  });

  it('Verifica se a string passada como parâmetro tem o mesmo número de caracteres que a string retornada', () => {
    const myStr = 'this is a string of length 29';
    expect(decode(myStr).length).toBe(myStr.length);
  });

})
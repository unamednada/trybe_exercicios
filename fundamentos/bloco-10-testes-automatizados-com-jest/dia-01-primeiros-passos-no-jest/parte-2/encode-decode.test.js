const { encode, decode } = require('./encode-decode.js');

describe('Verifica se encode se comporta como esperado', () => {

  it('Verifica se encode é uma função', () => {
    expect('function').toBe(typeof encode);
  });

})

describe('Verifica se decode se comporta como esperado', () => {

  it('Verifica se decode é uma função', () => {
    expect('function').toBe(typeof decode);
  });

})
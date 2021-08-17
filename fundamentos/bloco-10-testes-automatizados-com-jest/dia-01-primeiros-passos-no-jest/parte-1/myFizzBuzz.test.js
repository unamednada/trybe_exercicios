const myFizzBuzz = require('./myFizzBuzz.js');

describe('A função myFizzBuzz(num) retorna \"fizzbuzz\" se o número for divisível por 3 e 5, retorna \"fizz\" se o número for divisível apenas por 3, retorna \"buzz\" se divisível apenas por 5, retorna <num> se não for divisível por 3 ou 5 e <false> caso o parâmetro não seja um numero', () => {

  it('myFizzBuzz() tem o retorno esperado quando passamos um número divisível por 3 e 5', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });

  it('myFizzBuzz() tem o retorno esperado quando passamos um número divisível apenas por 3', () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });
  
});
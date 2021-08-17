const myRemove = require('./myRemove.js');

describe('A função myRemove(arr, item) recebe um array e retorna uma cópia desse array sem o elemento item', () => {

  it('A chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

});
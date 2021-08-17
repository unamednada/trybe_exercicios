const myRemove = require('./myRemove.js');

describe('A função myRemove(arr, item) recebe um array e retorna uma cópia desse array sem o elemento item', () => {

  it('A chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('A função myRemove() não retorna o mesmo array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  
  it('O array passado como parâmetro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    const newArr = myRemove(arr, 3);
    expect([...arr, ...newArr]).toEqual([1, 2, 3, 4, 1, 2, 4]);
  });
});
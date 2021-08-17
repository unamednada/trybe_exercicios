const myRemoveWithoutCopy = require('./myRemoveWithoutCopy.js');

describe('A função myRemoveWithoutCopy(arr, item) retorna o array original sem o item', () => {
  
  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });

  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
})
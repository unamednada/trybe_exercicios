const objetos = require('./objetos');

describe('Compare 2 objetos para verificar se são idênticos ou não', () => {
  const [obj1, obj2, obj3] = [...objetos];

  it('Comparar 2 objetos não idênticos', () => {
    expect(obj2).not.toEqual(obj3);
  });

  it('Comparar as propriedades de 2 objetos para verificar se são idênticos', () => {
    // fonte: https://codewithhugo.com/jest-array-object-match-contain/
    expect(obj1).toEqual(
      expect.objectContaining({...obj2})
    );
  });

  it('Comparar o array de chaves e de valores de 2 objetos para verificar se são ESTRITAMENTE idênticos', () => {
    expect([Object.keys(obj1), Object.values(obj1)]).not.toEqual([Object.keys(obj3), Object.values(obj3)]);
  });

});
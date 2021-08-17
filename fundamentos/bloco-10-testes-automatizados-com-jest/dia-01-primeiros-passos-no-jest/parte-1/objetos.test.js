const objetos = require('./objetos');

describe('Compare 2 objetos para verificar se são idênticos ou não', () => {
  const [obj1, obj2, obj3] = [...objetos];

  it('Comparar 2 objetos não idênticos', () => {
    expect(obj2).not.toEqual(obj3);
  });

  it('Comparar as chaves de 2 objetos para verificar se são idênticos', () => {
    expect(obj1).toEqual(
      expect.objectContaining({...obj2})
    );
  });

});
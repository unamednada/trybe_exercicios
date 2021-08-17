const objetos = require('./objetos');

describe('Compare 2 objetos para verificar se são idênticos ou não', () => {

  it('Comparar 2 objetos não idênticos', () => {
    const [ obj1, obj2 ] = [...objetos];
    expect(obj1).toEqual(obj2);
  })

});
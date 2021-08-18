const { professionalBoard, searchEmployee } = require('./bonus.js');

describe('Verifica se a função searchEmployee se comporta como esperado', () => {

  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  })

  it('Verifica se o retorno de searchEmployee é uma string', () => {
    expect(typeof searchEmployee()).toBe('string');
    expect(typeof searchEmployee('0000-0')).toBe('string');
  })

})
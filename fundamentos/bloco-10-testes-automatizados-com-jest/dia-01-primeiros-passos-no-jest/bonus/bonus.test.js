const { professionalBoard, searchEmployee } = require('./bonus.js');

describe('Verifica se a função searchEmployee se comporta como esperado', () => {

  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  })

  it('Verifica se o retorno de searchEmployee é uma string', () => {
    expect(typeof searchEmployee()).toBe('string');
    
    const params = [['0000-0'], ['0000-0', 'firstName'], ['8579-6'], ['8579-6', 'lastName'], ['9852-2-2', 'specialities'], ['4456-4', 'fullName']];

    expect(params.map((param) => typeof searchEmployee(...param))).toEqual('string '.repeat(params.length).split(' ').slice(0, -1));
  })

})
const { professionalBoard, searchEmployee } = require('./bonus.js');

describe('Verifica se a função searchEmployee se comporta como esperado', () => {

  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Verifica se o retorno de searchEmployee é uma string', () => {
    expect(typeof searchEmployee()).toBe('string');
    
    const params = [['0000-0'], ['0000-0', 'firstName'], ['8579-6'], ['8579-6', 'lastName'], ['9852-2-2', 'specialities'], ['4456-4', 'fullName']];

    expect(params.map((param) => typeof searchEmployee(...param))).toEqual('string '.repeat(params.length).split(' ').slice(0, -1));
  });

  it('Verifica se searchEmployee retorna as strings corretas para parâmetros inválidos', () => {
    expect(searchEmployee('0000-0')).toBe('ID não identificada');
    expect(searchEmployee()).toBe('ID não identificada');
  });

  it('Verifica se searchEmployee tem o retorno esperado com ID válido e informação inválida', () => {
    expect(searchEmployee('8579-6')).toBe('Informação indisponível');
    expect(searchEmployee('9852-2-2', 'unavailable')).toBe('Informação indisponível');
  });
})
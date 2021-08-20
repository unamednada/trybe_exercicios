const dog = require('./dog-pics.js');

describe('Tesa se a função fetch', () => {
  const url = 'https://api.github.com';

  it('foi importada corretamente', () => {
    expect(typeof dog.fetch).toBe('function');
  })

  it('retorna uma promise', async () => {
    const response = await dog.fetch(url);

    expect(response).resolves;
  })

  it('contém um json em seu retorno', async () => {
    const params = '/users/unamednada';
    const endpoint = url + params;
    const response = await dog.fetch(endpoint);
    const jsonResponse = await response.json();

    expect(jsonResponse).toEqual(expect.objectContaining({ 'name': 'Gustavo Dias Guimarães Barbosa'}));
  })
})
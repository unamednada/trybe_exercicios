const dog = require('./dog-pics.js');

describe('Tesa se a função fetch', () => {

  it('foi importada corretamente', () => {
    expect(typeof dog.fetch).toBe('function');
  })

  it('retorna uma promise', async () => {
    const url = 'https://api.github.com';
    const response = await dog.fetch(url);

    expect(typeof response).toBe('object');
  })
})
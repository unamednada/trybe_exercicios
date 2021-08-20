const dog = require('./dog-pics.js');

describe('Tesa se a função fetch', () => {

  it('foi importada corretamente', () => {
    expect(typeof dog.fetch).toBe('function');
  })

  it('retorna uma promise', () => {
    const url = 'https://api.github.com';
    expect(dog.fetch(url)).toBe('');
  })
})
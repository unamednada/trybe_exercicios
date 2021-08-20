const dog = require('./dog-pics.js');

describe('Tesa se a função fetch', () => {

  it('foi importada corretamente', () => {
    expect(typeof dog.fetch).toBe('function');
  })
})
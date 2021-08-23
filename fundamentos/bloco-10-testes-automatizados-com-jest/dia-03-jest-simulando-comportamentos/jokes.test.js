const jokes = require('./jokes.js');
const { fetchJoke } = jokes;
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('Testa se a função fetchJoke', () => {

  it('retorna uma piada', async () => {
    expect.assertions(1);

    fetch.mockImplementation(async () => {
      return {
        json: async () => { 
          return {
            'id': '7h3oGtrOfxc',
            'joke': 'Whiteboards ... are remarkable.',
            'status': 200
          }
        }
      }
    })

    const myJoke = await fetchJoke();

    expect(myJoke).toBe('Whiteboards ... are remarkable.');

  })

})
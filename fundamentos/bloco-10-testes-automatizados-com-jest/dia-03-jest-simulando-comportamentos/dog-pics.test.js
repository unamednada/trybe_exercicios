const dog = require('./dog-pics.js');
const { fetchDogPic } = dog;
const fetch = require('node-fetch');

// describe('Tesa se a função fetch', () => {
//   const url = 'https://api.github.com';

//   it('foi importada corretamente', () => {
//     expect(typeof dog.fetch).toBe('function');
//   })

//   it('retorna uma promise', async () => {
//     const response = await dog.fetch(url);

//     expect(response).resolves;
//   })

//   it('contém um json em seu retorno', async () => {
//     const params = '/users/unamednada';
//     const endpoint = url + params;
//     const response = await dog.fetch(endpoint);
//     const jsonResponse = await response.json();

//     expect(jsonResponse).toEqual(expect.objectContaining({ 'name': 'Gustavo Dias Guimarães Barbosa'}));
//   })
// })

jest.mock('node-fetch');

describe('Testa se a função fetchDogPic', () => {

  it('retorna uma propriedade json em sua resposta contendo status', async () => {
    // expect.assertions(1);
    
    fetch.mockImplementation(async () => {
      return {
        json: async () => { 
          return {
            status: 'success'
          }
        }
      }
    })

    const successResponse = await dog.fetchDogPic();

    expect(successResponse).toEqual({ status: 'success' });
  })

//   it('retorna \'request failed\' quando não resolve', async () => {

//     fetch.mockImplementation(async () => {
//       throw new Error('request failed');
//     })

//     const error = await dog.fetchDogPic();

//     expect(error).rejects.toBe('request failed');
//   })
})


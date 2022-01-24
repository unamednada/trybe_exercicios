const fetch = require('node-fetch');

const URL = 'https://viacep.com.br/ws/';

const lookUp = async (cep) => {
  const response = await fetch(URL + cep + '/json/');

  if (!response.ok) return null;

  const address = await response.json();

  if (address.error) return null;

  return address;
};

module.exports = {
  lookUp,
};

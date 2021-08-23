const fetch = require('node-fetch');

const fetchDogPic = async () => {
  const endpoint = 'https://dog.ceo/api/breeds/image/random';
  try {
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    return error;
  }
}

// fetchDogPic().then((response) => console.log(response));

module.exports = { fetchDogPic };
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const params = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, params)
  .then((response) => response.json())
  .then((jsonResponse) => {
    document.getElementById('jokeContainer').innerText = jsonResponse.joke;
  });
};

window.onload = () => fetchJoke();
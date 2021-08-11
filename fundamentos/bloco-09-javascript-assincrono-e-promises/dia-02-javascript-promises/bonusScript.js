const API_URL = 'https://icanhazdadjoke.com/';

const jokeRequestObj = {
  method: 'GET',
  headers: { 'Accept': 'application/json' },
};

const fetchJoke = async () => {
    const response = await fetch(API_URL, jokeRequestObj);
    // Learned at codecademy JavaScript course:
    if (response.ok) {
      const jsonResponse = await response.json();
      document.getElementById('jokeContainer').innerText = jsonResponse.joke;
    }
};

window.onload = () => fetchJoke();
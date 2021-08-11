const API_URL = 'https://icanhazdadjoke.com/';

const jokeRequestObj = {
  method: 'GET',
  headers: { 'Accept': 'application/json' },
};

const fetchJoke = async () => {
    // Learned at codecademy JavaScript course:
    try {
      const response = await fetch(API_URL, jokeRequestObj);

      if (response.ok) {
        const jsonResponse = await response.json();
        document.getElementById('jokeContainer').innerText = jsonResponse.joke;
      }
    } catch (error) {
      console.log(error);
    }
};

window.onload = () => fetchJoke();
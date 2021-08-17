// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
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

const promise = new Promise((resolve, reject) => {
  let myArray = [];
  for (let i = 0; i < 10; i += 1)  {
    let num = Math.floor(Math.random() * 51);
    myArray.push(num);
  }
  myArray = myArray.map((number) => number * number);
  console.log(myArray);
  const totalArraySum = myArray.reduce((sum, current) => sum + current, 0);
  console.log(totalArraySum);
  if (totalArraySum < 8000) {
    return resolve(totalArraySum);
  }
  return reject();
});

promise.then((sum) => [2, 3, 5, 10].map((number) => sum / number))
.then((array) => {
  console.log(array.reduce((sum, current) => sum + current, 0));
})
.catch(() => console.log('É mais de 8 mil! Essa promise deve estar quebrada!'));
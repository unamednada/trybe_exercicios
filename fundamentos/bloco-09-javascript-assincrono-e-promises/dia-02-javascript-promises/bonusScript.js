const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = async () => {
  // Learned at codecademy JavaScript course:
  const jokeRequestObj = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  try {
    const response = await fetch(API_URL, jokeRequestObj);

    if (response.ok) {
      const jsonResponse = await response.json();
      document.getElementById("jokeContainer").innerText = jsonResponse.joke;
    }
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => fetchJoke();

const sumRandomNumbers = () => {
  // Cria um array com 10 numeros de 1 a 50 usando método from
  const myArray = Array.from(
    // Primeiro parâmetro do método from: adiciona chave length com valor 10;
    { length: 10 },
    // Segundo parâmetro: função que gera o número aleatório
    () => Math.floor(Math.random() * 50) + 1
  );
  // Declaração da soma usando map e reduce
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);
  
  // Uso de throw para gerar um erro qualquer - para a execução!
  if (sum >= 8000) {
    throw new Error();
  }
  // Caso chegue nesta linha, retorna a soma;
  return sum;
}

// Função que retorna a soma dos 4 resultados da divisão do parâmetro por 2, 3, 5 e 10
const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

// Função assíncrona
const fetchPromise = async () => {
  // Tentativas de obter a soma e a soma da soma, uso do await para esperar que as promessas se resolvam ou rejeitem
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
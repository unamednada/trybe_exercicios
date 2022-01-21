const readLine = require('readline-sync');

const distance = readLine.questionInt('Informe a distância, em m:\n');
const time = readLine.questionInt('Informe o tempo, em s:\n');

const speed = (distance / time).toFixed(2);

console.log(`A velocidade média é: ${speed} m/s`);
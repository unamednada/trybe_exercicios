const readLine = require('readline-sync');

const weight = readLine.questionFloat('Informe seu peso, em kg:\n');
const height = readLine.questionFloat('Informe sua altura, em m:\n');

const imc = (weight / (height * height)).toFixed(2);

console.log(`Seu IMC é: ${imc}`);
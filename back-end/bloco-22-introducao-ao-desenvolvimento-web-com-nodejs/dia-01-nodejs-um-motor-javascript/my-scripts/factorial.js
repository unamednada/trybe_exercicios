const readLine = require('readline-sync');

const fact = n => n === 1 ? 1 : n * fact(n- 1);

const num = readLine.questionInt('Digite um número inteiro:\n');

console.log(`O fatorial de ${num} é ${fact(num)}`);
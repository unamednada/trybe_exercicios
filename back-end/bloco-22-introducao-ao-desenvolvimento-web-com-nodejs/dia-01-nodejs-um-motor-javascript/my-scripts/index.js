const readLine = require('readline-sync');

console.log(
  `
  Bem-vindxs! Qual script gostaria de executar?
  1 - imc;
  2 - velocidade;
  3 - sorteio.
  `
)

const script = readLine.questionInt('Digite um numero e pressione enter:\n');

if (script === 1) require('./imc');
else if (script === 2) require('./velocidade');
else require('./sorteio');
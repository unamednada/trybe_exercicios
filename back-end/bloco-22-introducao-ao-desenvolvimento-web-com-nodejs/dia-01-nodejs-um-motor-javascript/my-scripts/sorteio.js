const readLine = require('readline-sync');

const randNum = Math.floor(Math.random() * 11);

const trial = readLine.questionInt('Escolha um número de 0 a 10:\n');

if (trial === randNum) console.log('Acertou!!! O número era ' + randNum)
else console.log("Errou!!! O número era " + randNum);

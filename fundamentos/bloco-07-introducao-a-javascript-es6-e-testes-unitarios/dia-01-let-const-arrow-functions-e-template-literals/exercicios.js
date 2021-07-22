// const testingScope = escopo => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];


// for (let i = 0; i < oddsAndEvens.length; i += 1) {
//   for (let j = 0; j < oddsAndEvens.length; j += 1) {
//     if (oddsAndEvens[j] > oddsAndEvens[i]) {
//       let min = oddsAndEvens[i];
//       oddsAndEvens[i] = oddsAndEvens[j];
//       oddsAndEvens[j] = min;
//     }
//   }
// }


// Código sort comparefunction de: https://www.javascripttutorial.net/javascript-array-sort/

// oddsAndEvens.sort((a, b) => a - b);

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// const fatorial = n => {
//   let fat = 1;
//   for (i = 1; i <= n; i += 1) {
//     fat *= i;
//   }
//   return fat;
// }

const factRecursive = n => n === 1 ? 1 : n * factRecursive(n - 1);

console.log(factRecursive(5));
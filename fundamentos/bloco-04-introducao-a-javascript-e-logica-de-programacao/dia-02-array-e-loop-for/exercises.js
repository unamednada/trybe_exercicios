let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (number of numbers) {
//   console.log(number);
// }

let sum = numbers.reduce((total, current) => total + current, 0);
// console.log(sum);

let len = numbers.length;
let mediaA = sum / len;
// console.log(mediaA);

// mediaA > 20 ? console.log("valor maior que 20") : console.log("valor menor ou igual a 20");

let max = numbers[0];

for (let i = 0; i < len; i++) {
  numbers[i] > max ? max = numbers[i] : max = max;
}

// console.log(max);

let impares = 0;

// numbers.forEach(number => {number % 2 != 0 ? impares++ : impares = impares});
// impares > 0 ? console.log(impares) : console.log("nenhum valor ímpar encontrado");

let min = numbers[0];

for (number of numbers) {
  number < min ? min = number : min = min;
}

// console.log(min);

let myArray = [];

for (let i = 1; i <= 25; i++) {
  myArray.push(i);
}

// console.log(myArray);

let divisaoPorDois = myArray.map((value) => value / 2);

// console.log(divisaoPorDois);
// console.log(myArray);
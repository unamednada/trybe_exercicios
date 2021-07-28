// function getChange(payable, paid) {
//   const coins = [200, 100, 50, 20, 10, 5, 2, 1];
//   const change = [];
//   const { length } = coins;
//   let remaining = paid - payable;

//   if (payable > paid) throw new Error('paid value is not enough');

//   coins.forEach((coin) => {
//     while (remaining >= coin) {
//       remaining -= coin;
//       change.push(coin);
//     }
//   });

//   return change;
// }

// const assert = require('assert');

// let result = getChange(1, 1); // no change/coins just an empty array
// let expected = [];
// assert.deepStrictEqual(result, expected);

// result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
// expected = [50, 20, 10, 5];
// assert.deepStrictEqual(result, expected);

// result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
// expected = [100, 10, 2, 2];
// assert.deepStrictEqual(result, expected);

// result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
// expected = [200, 100, 50, 20, 10, 5, 2, 1];
// assert.deepStrictEqual(result, expected);

// assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

// const assert = require('assert');
// // escreva a função factorial aqui
// // Solução para erro callstack maximum size: https://stackoverflow.com/questions/25126141/factorial-function-running-error-maximum-call-stack-size-exceeded
// const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

// const in1 = 5;
// const exp1 = 120;

// const in2 = 9;
// const exp2 = 362880;

// const in3 = 1;
// const exp3 = 1;

// const in4 = 0;
// const exp4 = 1;

// const in5 = 3;
// const exp5 = 6;

// const out1 = factorial(in1);
// const out2 = factorial(in2);
// const out3 = factorial(in3);
// const out4 = factorial(in4);
// const out5 = factorial(in5);

// assert.strictEqual(out1, exp1);
// assert.strictEqual(out2, exp2);
// assert.strictEqual(out3, exp3);
// assert.strictEqual(out4, exp4);
// assert.strictEqual(out5, exp5);

// const assert = require('assert');
// // escreva a função removeMiddle aqui

// const removeMiddle = array => array.splice(Math.floor(array.length / 2), 1);

// const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
// const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
// const expectedOutput = ['queen'];
// const output = removeMiddle(words);

// assert.deepStrictEqual(output, expectedOutput);
// assert.deepStrictEqual(words, expectedWords);

const assert = require('assert');

const getLargestNumber = (array) => array.sort((a, b) => a - b)[array.length - 1];

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(typeof getLargestNumber, 'function');
assert.strictEqual(typeof getLargestNumber(parameter), 'number');
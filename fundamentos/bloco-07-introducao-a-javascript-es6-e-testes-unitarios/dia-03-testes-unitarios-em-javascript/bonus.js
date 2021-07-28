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

const assert = require('assert');
// escreva a função factorial aqui

const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);
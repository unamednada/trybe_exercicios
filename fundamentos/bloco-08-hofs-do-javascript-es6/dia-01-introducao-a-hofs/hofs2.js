const assert = require('assert');
const { type } = require('os');

const oneToTen = n => n === Math.floor(Math.random() * 10);

const casino = (number, game) => game(number) ? 'Parabéns, você ganhou!' : 'Tente novamente';

assert.strictEqual(typeof casino, 'function');
assert.strictEqual(typeof casino(3, (n) => n < 0 ), 'string');
assert.strictEqual(typeof casino(3, oneToTen), 'string');

console.log(casino(3, oneToTen));
const assert = require('assert');

const casino = (number, game) => game(number) ? 'Parabéns, você ganhou!' : 'Tente novamente';

assert.strictEqual(typeof casino, 'function');
assert.strictEqual(typeof casino(3, (n) => n < 0 ), 'number');
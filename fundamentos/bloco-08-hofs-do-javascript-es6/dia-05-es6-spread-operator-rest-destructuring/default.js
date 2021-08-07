const assert = require('assert');

// escreva greet abaixo

const greet = (...params) => params.length == 2 ? `${params[1]} ${params[0]}` : `Hi ${params[0]}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
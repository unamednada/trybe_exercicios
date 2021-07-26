const assert = require('assert');

const greetPeople = (people) => parameter.map((person) => 'Hello ' + person);

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// console.log(greetPeople(parameter));

assert.strictEqual(typeof(greetPeople), 'function');
assert.strictEqual(typeof(greetPeople(parameter)), 'object');
assert.deepStrictEqual(greetPeople(parameter), result);

// console.log(typeof(result));


const assert = require('assert');

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = () => 0;

const totalPoints = (checker) => checker();

assert.strictEqual(typeof totalPoints, 'function');
assert.strictEqual(typeof checkAnswers, 'function');
assert.strictEqual(typeof checkAnswers(), 'number');
assert.strictEqual(typeof totalPoints(checkAnswers), 'number');
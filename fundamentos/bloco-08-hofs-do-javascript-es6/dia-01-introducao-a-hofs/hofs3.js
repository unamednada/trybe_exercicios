const assert = require('assert');

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (ssAnswers, keyAnswers) => ssAnswers.map((answer, index) => answer === keyAnswers[index] ? 1 : -0.5).reduce((sum, current) => sum + current, 0);

const totalPoints = (students, key, checker) => checker(students, key);

assert.strictEqual(typeof totalPoints, 'function');
assert.strictEqual(typeof checkAnswers, 'function');
assert.strictEqual(typeof checkAnswers(STUDENT_ANSWERS, RIGHT_ANSWERS), 'number');
assert.strictEqual(typeof totalPoints(STUDENT_ANSWERS, RIGHT_ANSWERS, checkAnswers), 'number');
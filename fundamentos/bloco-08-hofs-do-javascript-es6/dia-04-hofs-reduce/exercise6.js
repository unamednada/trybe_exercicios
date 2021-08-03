const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => grades.map((grade) => ({ name: (students[grades.indexOf(grade)]), average: +(grade.reduce((sum, current) => sum + current) / grade.length).toFixed(1)}));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// console.log(studentAverage());

assert.deepStrictEqual(studentAverage(), expected);
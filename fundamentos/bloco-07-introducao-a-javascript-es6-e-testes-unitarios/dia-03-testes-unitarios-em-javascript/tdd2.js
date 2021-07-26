const assert = require('assert');
const { type } = require('os');

// const greetPeople = (people) => parameter.map((person) => 'Hello ' + person);

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// // console.log(greetPeople(parameter));

// assert.strictEqual(typeof(greetPeople), 'function');
// assert.strictEqual(typeof(greetPeople(parameter)), 'object');
// assert.deepStrictEqual(greetPeople(parameter), result);

// // console.log(typeof(result));

// const removeVowels = (word) => {
//   let charArray = word.split('');
  
//   let vowelCount = 1;
//   for (let i = 0; i < charArray.length; i += 1) {
//     if (['a', 'e', 'i', 'o', 'u'].includes(charArray[i])) {
//     charArray[i] = vowelCount.toString();
//     vowelCount += 1;
//     }
//   }
//   return charArray.join('');
// }

// const parameter = 'Dayane';
// const result = 'D1y2n3';

// assert.strictEqual(typeof(removeVowels), 'function');
// assert.strictEqual(typeof(removeVowels(parameter)), 'string');
// assert.strictEqual(removeVowels(parameter), result);

const greaterThanTen = (array) => {
  let results = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results += array[index];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof(greaterThanTen), 'function');
assert.strictEqual(typeof(greaterThanTen(parameter)), 'object');

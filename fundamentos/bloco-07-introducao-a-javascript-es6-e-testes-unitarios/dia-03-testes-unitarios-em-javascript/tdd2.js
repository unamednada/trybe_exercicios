const assert = require('assert');

// const greetPeople = (people) => parameter.map((person) => 'Hello ' + person);

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// // console.log(greetPeople(parameter));

// assert.strictEqual(typeof(greetPeople), 'function');
// assert.strictEqual(typeof(greetPeople(parameter)), 'object');
// assert.deepStrictEqual(greetPeople(parameter), result);

// // console.log(typeof(result));

const removeVowels = (word) => {
  let charArray = word.split('');
  
  let vowelCount = 1;
  for (let i = 0; i < charArray.length; i += 1) {
    if (['a', 'e', 'i', 'o', 'u'].includes(charArray[i])) {
    charArray[i] = vowelCount.toString();
    vowelCount += 1;
    }
  }
  return charArray.join('');
}

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof(removeVowels), 'function');
assert.strictEqual(typeof(removeVowels(parameter)), 'string');
assert.strictEqual(removeVowels(parameter), result);

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
  const characters = word.split('');
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(characters[index]);
    } else {
      results.push('_');
    }
  }
  return results;
};



const parameter = 'Dayane';
const result = 'D1y2n3';
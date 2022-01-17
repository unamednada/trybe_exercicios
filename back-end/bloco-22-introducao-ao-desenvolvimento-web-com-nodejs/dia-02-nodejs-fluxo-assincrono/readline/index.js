const changeWord = require('./changeWord');
const fizzBuzz = require('./fizzbuzz');
const {
  question,
  readFile
} = require('./readLine');

fizzBuzz()
  .then(res => console.log(res))
  .catch(err => console.error(err));
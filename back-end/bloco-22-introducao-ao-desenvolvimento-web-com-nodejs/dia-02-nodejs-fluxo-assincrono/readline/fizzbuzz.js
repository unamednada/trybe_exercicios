const {
  question
} = require('./readLine');

async function fizzBuzz() {
  const num = +(await question('Type a number:\n'));
  return new Promise((resolve, reject) => {
    if (num % 15 === 0) resolve('FizzBuzz');
    else if (num % 3 === 0) resolve('Fizz');
    else if (num % 5 === 0) resolve('Buzz');
    else {
      return reject(num);
    };
  });
};

module.exports = fizzBuzz;
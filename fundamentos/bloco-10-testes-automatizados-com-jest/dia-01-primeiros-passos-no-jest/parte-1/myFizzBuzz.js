// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

const myFizzBuzz = (num) => typeof num !== 'number' ? false : num % 3 !== 0 && num % 5 !== 0 ? num : `${num % 3 === 0 ? 'fizz' : ''}${num % 5 === 0 ? 'buzz' : ''}`;

module.exports = myFizzBuzz;
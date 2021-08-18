const vowels = ['a', 'e', 'i', 'o', 'u'];
const numbers = ['1', '2', '3', '4', '5'];

const encode = (string) => string.split('').reduce((str, char) => vowels.includes(char) ? `${str}${vowels.indexOf(char) + 1}` : `${str}${char}`, '');

const decode = (string) => string.split('').reduce((str, num) => numbers.includes(num) ? `${str}${vowels[num - 1]}` : `${str}${num}`, '');

module.exports = {
  encode,
  decode
}
const vowels = ['a', 'e', 'i', 'o', 'u'];

const encode = (string) => string.split('').reduce((str, char) => vowels.includes(char) ? `${str}${vowels.indexOf(char) + 1}` : `${str}${char}`, '');

function decode(code) {
  let string = '';
  let keys = ['1', '2', '3', '4', '5'];
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < code.length; i += 1) {
    if (keys.includes(code[i])) {
      string += vowels[keys.indexOf(code[i])];
    } else {
      string += code[i];
    }
  }

  return string;
}

module.exports = {
  encode,
  decode
}
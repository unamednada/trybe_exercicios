function encode(string) {
  let code = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i += 1) {
    if (vowels.includes(string[i])) {
      code += (vowels.indexOf(string[i]) + 1);
    } else {
      code += string[i];
    }
  }

  return code;
}

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
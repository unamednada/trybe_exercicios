const isPalindromo = word => {
  let wordArray = word.split('');
  wordArray.reverse();
  let reversedWord = wordArray.join('');

  if (word === reversedWord) {
    return true;
  }
  return false;
}

console.log(isPalindromo('araru'));
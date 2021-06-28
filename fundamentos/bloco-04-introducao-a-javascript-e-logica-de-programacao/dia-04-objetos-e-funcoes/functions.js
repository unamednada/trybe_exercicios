const isPalindromo = word => {
  let wordArray = word.split('');
  wordArray.reverse();
  let reversedWord = wordArray.join('');

  if (word === reversedWord) {
    return true;
  }
  return false;
}

// console.log(isPalindromo('araru'));

const indexMaiorValor = array => {
  let max = array[0];
  let maxIndex = 0;
  for (index in array) {
    if (array[index] > max) {
      max = array[index];
      maxIndex = index;
    }
  }

  return maxIndex;
}

console.log(indexMaiorValor([2, 3, 6, 7, 10, 1]));
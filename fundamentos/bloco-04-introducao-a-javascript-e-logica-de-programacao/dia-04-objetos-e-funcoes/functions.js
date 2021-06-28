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

// console.log(indexMaiorValor([2, 3, 6, 7, 10, 1]));

const indexMenorValor = array => {
  let min = array[0];
  let minIndex = 0;
  for (let index in array) {
    if (array[index] < min) {
      min = array[index];
      minIndex = index;
    }
  }

  return minIndex;
}

// console.log(indexMenorValor([2, 4, 6, 7, 10, 0, -3]));

const nomeMaisLongo = array => {
  let maxLength = 0;
  let MaxNome = '';
  for (let nome of array) {
    if (nome.length > maxLength) {
      maxNome = nome;
    }
  }

  return maxNome;
}

// console.log(nomeMaisLongo(['Fernanda', 'Augusto', 'Maria', 'Carla', 'Espafregundo']));

const repetente = array => {
  let maxRepete = 0;
  let repetenteMax = array[0];

  for (let number of array) {
    let repete = 0;
    for (let comparing of array) {
      if (number === comparing) {
        repete += 1;
      }
    }

    if (repete > maxRepete) {
      maxRepete = repete;
      repetenteMax = number;
    }
  }
  return repetenteMax;
}

// console.log(repetente([2, 3, 3, 5, 5, 4, 4, 4, 7, 8, 7, 6, 4, 3, 2, 7, 3]));

const somaAteN = n => {
  let soma = 0;
  for (let i = 1; i <= n; i += 1) {
    soma += i;
  }

  return soma;
}

// console.log(somaAteN(5));

const verificaFimPalavra = (word, ending) => {
  let end = ending.length;
  let newWord = word.slice(end + 1);
  
  for (let i = 0; i < end - 1; i += 1) {
    if (newWord[i] != ending[i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaFimPalavra('trybe', 'ibe'));
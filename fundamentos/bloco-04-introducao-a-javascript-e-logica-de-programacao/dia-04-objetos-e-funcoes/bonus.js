let valoresRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
}

const romanosParaArabes = romanoStr => {
  let arabe = 0;
  for (let romano of romanoStr) {
    for (let chave in valoresRomanos) {
      if (romano === chave) {
        arabe += valoresRomanos[chave];
      }
    } 
  }

  arabe = subtraiOsNegativos(romanoStr, arabe);

  return arabe;
}

const subtraiOsNegativos = (romanoStr, arabe) => {
  if (romanoStr.includes('iv')) {
    arabe -= 2;
    romanoStr = romanoStr.replace('iv', '');
  }

  if (romanoStr.includes('ix')) {
    arabe -= 2;
    romanoStr = romanoStr.replace('ix', '');
  }

  if (romanoStr.includes('xl')) {
    arabe -= 20;
    romanoStr = romanoStr.replace('xl', '');
  }
  
  if (romanoStr.includes('xc')) {
    arabe -= 20;
    romanoStr = romanoStr.replace('xc', '');
  }

  if (romanoStr.includes('cd')) {
    arabe -= 200;
    romanoStr = romanoStr.replace('cd', '');
  }

  if (romanoStr.includes('cm')) {
    arabe -= 200;
    romanoStr = romanoStr.replace('cm', '');
  }
  return arabe;
}

// console.log(romanosParaArabes('mccxciv'));

const arrayOfNumbers = vector => {
  let pares = [];
  for (array of vector) {
    for (item of array) {
      if (item % 2 === 0) {
        pares.push(item);
      }
    }
  }

  return pares;
}
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];


// function onlyUnique retirada de https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let unique = basket.filter(onlyUnique);
// console.log(unique);

let frutasQtdes = {

}

let mensagem = 'Sua cesta possui: ';

for (let fruta of unique) {
  frutasQtdes[fruta] = 0;
  for (let item of basket) {
    if (fruta === item) {
      frutasQtdes[fruta] += 1;
    }
  }

  if (unique.indexOf(fruta) === unique.length - 1) {
    mensagem += frutasQtdes[fruta] + ' ' + fruta + 's';
  } else {
    mensagem += frutasQtdes[fruta] + ' ' + fruta + 's , ';
  }

}

// console.log(mensagem);







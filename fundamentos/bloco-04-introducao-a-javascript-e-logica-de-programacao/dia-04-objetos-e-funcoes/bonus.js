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
console.log(arrayOfNumbers(vector));
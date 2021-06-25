// let fruits = [3, 4, 10, 1, 12];

// let soma = fruits.reduce((total, current) => total + current);
// soma > 15 ? console.log(soma) : console.log("valor menor que 16");


// let resultado = 100;
// for (let i = 0; i <= 9; i++) {
//   resultado -= i;
// }
// console.log(resultado);


const quadradoDeAsteriscos = n => {
  let linha = "";
  
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      linha += "*"
    }
    console.log(linha);
    linha = "";
  }
}

//Referência quadradoDeAsteriscos: https://stackoverflow.com/questions/33089739/javascript-for-loop-console-print-in-one-line/33089779

// quadradoDeAsteriscos(10);

const descidaDeAsteriscos = n => {
  let linha = "";

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < i + 1; j += 1) {
      linha += "*";
    }
    console.log(linha);
    linha = "";
  }
}

// descidaDeAsteriscos(6);

const subidaDeAsteriscos = n => {
  let linha = "";

  for (let i = 0; i < n; i += 1) {
    let spaces = i + 1;
    while (spaces < n) {
      linha += " ";
      spaces += 1;
    }
    
    for (let j = 0; j < i + 1; j += 1) {
      linha += "*";
    }
    console.log(linha);
    linha = "";
  }
}

// subidaDeAsteriscos(10);

const piramideDeAsteriscos = n => {
  let linha = "";
  let ceil = Math.ceil(n / 2);
  let linhaCeil;
  for (let i = 0; i < ceil; i += 1) {
    let spaces;
    
    if (n % 2 != 0) {
      spaces = i + ceil;
    } else {
      spaces = i + ceil + 1;
    }
    
    while (spaces < n) {
      linha += " ";
      spaces += 1;
    }
    
    for (let j = 0; j < i + 1; j += 1) {
      linha += "*";
    }
    
    if (n % 2 != 0) {
      linhaCeil = i;
    } else {
      linhaCeil = i + 1;
    }

    for (let k = 0; k < linhaCeil; k += 1) {
      linha += "*";
    }

    console.log(linha);
    linha = "";
  }
}

// piramideDeAsteriscos(14);

const piramideVazia = n => {
  let linha = "";
  let ceil = Math.ceil(n / 2);
  let linhaCeil;
  for (let i = 0; i < ceil; i += 1) {
    let spaces;
    
    if (n % 2 != 0) {
      spaces = i + ceil;
      linhaCeil = i;
    } else {
      spaces = i + ceil + 1;
      linhaCeil = i + 1;
    }

    while (spaces < n) {
      linha += " ";
      spaces += 1;
    }
    
    if (i == ceil - 1) {
      for (let j = 0; j < i + 1; j += 1) {
        linha += "*";
      }
      for (let k = 0; k < linhaCeil - 1; k += 1) {
        linha += "*";
      }
    } else {
      linha += "*";
      
      if (n % 2 == 0) {
        linhaCeil = i * 2 + 1;
      } else {
        linhaCeil = i * 2;
      }

      for (let k = 0; k < linhaCeil - 1; k += 1) {
        linha += " ";
      }
    }

    if (i != 0 || n % 2 == 0) {
      linha += "*";
    } 

    console.log(linha);
    linha = "";
  }
}

// piramideVazia(10);

const primoOuNao = n => {
  let divisoes = 0;

  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) {
      divisoes += 1;
    }
  }

  if (divisoes == 0) {
    console.log("O número " + n + " é primo!");
  } else {
    console.log("O número " + n + " não é primo.");
  }
}

primoOuNao(7);
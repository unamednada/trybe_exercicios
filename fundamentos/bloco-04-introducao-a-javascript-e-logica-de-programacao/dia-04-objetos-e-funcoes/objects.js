let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  get mensagem() {
    return `Bem-vinda, ${this.personagem}`;
  }
}

// console.log(info.mensagem);

info.recorrente = 'Sim';

// console.log(info);

// for (let propriedade in info) {
//   console.log(propriedade);
// }

// for (let propriedade in info) {
//   console.log(info[propriedade]);
// }

let secondInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

console.log(`${info.personagem} e ${secondInfo.personagem}`);
console.log(`${info.origem} e ${secondInfo.origem}`);
console.log(`${info.nota} e ${secondInfo.nota}`);
if (info.recorrente === 'Sim' && secondInfo.recorrente === 'Sim') {
  console.log("Ambos recorrentes");
}
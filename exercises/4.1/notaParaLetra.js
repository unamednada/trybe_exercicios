const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Digite a nota a ser convertida: "));

if (isNaN(nota) || nota > 100 || nota < 0) {
  throw new Error("A nota deve ser um número entre 0 e 100!");
}

switch (true) {
  case nota >= 90:
    console.log("RESULTADO: A");
    break;
  case nota >= 80:
    console.log("RESULTADO: B");
    break;
  case nota >= 70:
    console.log("RESULTADO: C");
    break;
  case nota >= 60:
    console.log("RESULTADO: D");
    break;
  case nota >= 50:
    console.log("RESULTADO: E");
    break;
  default:
    console.log("RESULTADO: F");
}
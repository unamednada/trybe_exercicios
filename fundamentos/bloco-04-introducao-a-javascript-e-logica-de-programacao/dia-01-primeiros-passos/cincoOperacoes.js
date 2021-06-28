const prompt = require('prompt-sync')();

let operacao = parseInt(prompt("\nEscolha uma operação aritmética:\n\n 1. Adição\n 2. Subtração\n 3. Multiplicação\n 4. Divisão\n 5. Módulo\n\n DIGITE SOMENTE O NÚMERO!\n"));


let n1 = parseInt(prompt("Digite o primeiro número: (PRESSIONE ENTER PARA CONTINUAR) "));
let n2 = parseInt(prompt("Digite o segundo número: (PRESSIONE ENTER PARA CONTINUAR) "));
console.log("\nRESULTADO: ");

soma = n1 + n2;
sub =  n1 - n2;
mult = n1 * n2;
div = n1 / n2;
mod = n1 % n2;

switch (operacao) {
  case 1:
    console.log(n1 + " + " + n2 + " = " + soma);
    break;
  case 2:
    console.log(n1 + " - " + n2 + " = " + sub);
    break;
  case 3:
    console.log(n1 + " * " + n2 + " = " + mult);
    break;
  case 4:
    console.log(n1 + " / " + n2 + " = " + div);
    break;
  case 5:
    console.log(n1 + " % " + n2 + " = " + mod);
    break;
  default:
    console.log("Operação inválida! Selecione um número de 1 a 5!")
}

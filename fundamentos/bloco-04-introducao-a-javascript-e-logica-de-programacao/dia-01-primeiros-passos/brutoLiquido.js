if (isNaN(process.argv[2]) || process.argv[2] < 0) {
  throw new Error("Parameter must be a positive number!");
}

let salario = parseFloat(process.argv[2]);
let inss = 0;

switch (true) {
  case salario <= 1556.94:
    inss = salario * 0.08;
    break;
  case salario <= 2594.92:
    inss = salario * 0.09;
    break;
  case salario <= 5189.82:
    inss = salario * 0.11;
    break;
  default:
    inss = 570.88;
}

salario -= inss;

let ir = 0;

switch (true) {
  case salario <= 1903.98:
    ir = 0;
    break;
  case salario <= 2826.65:
    ir = salario * 0.075 - 142.80;
    break;
  case salario <= 3751.05:
    ir = salario * 0.15 - 354.80;
    break;
  case salario <= 4664.68:
    ir = salario * 0.225 - 636.13;
    break;
  default:
    ir = salario * 0.275 - 869.36;
}

salario -= ir;

console.log("O salário líquido após dedução do INSS e do IR é de: " + salario);

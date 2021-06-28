const prompt = require('prompt-sync')();

let valorCusto = parseFloat(prompt("Digite o custo do produto: "));
let valorCustoTotal = valorCusto * 1.2;

let valorVenda = parseFloat(prompt("Digite o valor da venda do produto: "));

let lucro = valorVenda - valorCustoTotal;

console.log("O lucro obtido foi de: R$ " + lucro);
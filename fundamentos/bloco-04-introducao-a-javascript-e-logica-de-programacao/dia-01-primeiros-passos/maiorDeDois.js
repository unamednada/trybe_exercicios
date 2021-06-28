if (isNaN(process.argv[2]) || isNaN(process.argv[3])) {
  throw new Error("Parameters must be numbers!");
}

n1 = parseInt(process.argv[2]);
n2 = parseInt(process.argv[3]);

n1 > n2 ? console.log(n1 + " é maior que " + n2): n1 == n2 ? console.log("Os números são iguais!") : console.log(n1 + " é menor que " + n2);
if (isNaN(process.argv[2])) {
  throw new Error("Parameter must be a number!");
}

num = parseInt(process.argv[2]);

num > 0 ? console.log("Número Positivo!") : num == 0 ? console.log("Número ZERO!") : console.log("Número Negativo.");
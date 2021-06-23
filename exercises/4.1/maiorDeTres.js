if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {
  throw new Error("Parameters must be numbers!");
}

n1 = parseInt(process.argv[2]);
n2 = parseInt(process.argv[3]);
n3 = parseInt(process.argv[4]);

console.log(Math.max(n1, n2, n3) + " é o maior dos três números :)");
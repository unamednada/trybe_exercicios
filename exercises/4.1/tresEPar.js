if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {
  throw new Error("Parameters must be numbers!");
}

n1 = parseInt(process.argv[2]);
n2 = parseInt(process.argv[3]);
n3 = parseInt(process.argv[4]);

if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0) {
  console.log("true");
} else {
  console.log("false");
}
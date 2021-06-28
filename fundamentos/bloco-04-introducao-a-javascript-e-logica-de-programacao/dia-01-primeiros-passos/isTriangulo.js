if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {
  throw new Error("Parameters must be numbers!");
}

ang1 = parseInt(process.argv[2]);
ang2 = parseInt(process.argv[3]);
ang3 = parseInt(process.argv[4]);

ang1 + ang2 + ang3 === 180 ? console.log("true") : console.log("false");
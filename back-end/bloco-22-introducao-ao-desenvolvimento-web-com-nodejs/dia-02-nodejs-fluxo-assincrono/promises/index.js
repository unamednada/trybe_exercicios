const {
  readSimpsons,
  readSimpsonID
} = require('./simpsons');

async function main() {
  try {
      const mySimpson = await readSimpsonID('10');
    console.log(mySimpson);
  } catch (err) {
    console.error(err);
  }
};

main();

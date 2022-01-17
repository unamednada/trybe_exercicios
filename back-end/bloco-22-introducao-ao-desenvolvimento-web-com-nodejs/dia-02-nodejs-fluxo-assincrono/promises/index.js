const {
  readSimpsons,
  readSimpsonID,
  deleteSimpsonID,
  createMySimpsonFamily,
  addToMyFamily,
} = require('./simpsons');

async function main() {
  try {
    await addToMyFamily(2);
  } catch (err) {
    console.error(err);
  }
};

main();

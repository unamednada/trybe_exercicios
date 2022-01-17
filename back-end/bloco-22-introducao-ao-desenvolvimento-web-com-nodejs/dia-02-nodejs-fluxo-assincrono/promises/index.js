const {
  readSimpsons,
  readSimpsonID,
  deleteSimpsonID,
  createMySimpsonFamily,
  addToMyFamily,
  substituteSimpson,
} = require('./simpsons');

async function main() {
  try {
    await substituteSimpson(2, 4);
  } catch (err) {
    console.error(err);
  }
};

main();

const {
  readSimpsons,
  readSimpsonID,
  deleteSimpsonID,
} = require('./simpsons');

async function main() {
  try {
    deleteSimpsonID('3');
  } catch (err) {
    console.error(err);
  }
};

main();

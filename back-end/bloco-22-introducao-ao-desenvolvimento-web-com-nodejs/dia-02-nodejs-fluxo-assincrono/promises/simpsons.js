const fs = require('fs').promises;

async function readSimpsonsIntoArray() {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsArray = Object.values(JSON.parse(simpsons));
    return simpsonsArray;
  } catch (err) {
    console.error(err);
  }
}

async function readSimpsons() {
  try {
    const simpsonsArray = await readSimpsonsIntoArray();
    simpsonsArray.forEach(({ id, name}) => {
      console.log(`${id} - ${name}`);
    })
  } catch (err) {
    console.error(err);
  }
};

async function readSimpsonID(simpsonID) {
  const promise = new Promise((resolve, reject) => {
    readSimpsonsIntoArray()
      .then(simpsonsArray => {
        if (!simpsonsArray.map(({ id }) => id).includes(simpsonID)) reject(new Error("ID não encontrado"));
        return resolve(simpsonsArray.filter(({ id }) => id === simpsonID));
      });
  })
  return promise;
}

async function deleteSimpsonID(simpsonID) {
  try {
    const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
    delete simpsons[simpsonID - 1];
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
  } catch(err) {
    console.error(err);
  };
}

module.exports = {
  readSimpsonsIntoArray,
  readSimpsons,
  readSimpsonID,
  deleteSimpsonID,
};

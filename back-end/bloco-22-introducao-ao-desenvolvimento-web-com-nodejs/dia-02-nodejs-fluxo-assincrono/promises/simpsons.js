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

async function createMySimpsonFamily(...simpsonIDs) {
  try {
    const simpsonsArray = await readSimpsonsIntoArray();
    const mySimpsons = simpsonsArray.filter(({ id }) => simpsonIDs.includes(+id));
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(mySimpsons));
  } catch(err) {
    console.error(err);
  }
}

async function addToMyFamily(simpsonID) {
  const myFamily = JSON.parse(await fs.readFile('./simpsonFamily.json', 'utf-8'));
  const myFamilyArray = Object.values(myFamily);
  const mySimpson = (await readSimpsonID(`${simpsonID}`))[0];
  myFamilyArray.push(mySimpson);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(myFamilyArray));
}

async function substituteSimpson(oldSimID, newSimID) {
  const myFamily = JSON.parse(await fs.readFile('./simpsonFamily.json', 'utf-8'));
  const myFamilyArray = Object.values(myFamily);
  const mySimpson = (await readSimpsonID(`${newSimID}`))[0];
  const myNewFamily = myFamilyArray.map(oldSim => +oldSim.id === oldSimID ? mySimpson : oldSim);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(myNewFamily));
}

module.exports = {
  readSimpsonsIntoArray,
  readSimpsons,
  readSimpsonID,
  deleteSimpsonID,
  createMySimpsonFamily,
  addToMyFamily,
  substituteSimpson,
};

const fs = require('fs').promises;

module.exports = async function readSimpsons() {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsArray = Object.values(JSON.parse(simpsons));
    simpsonsArray.forEach(({ id, name}) => {
      console.log(`${id} - ${name}`);
    })
  } catch (err) {
    console.error(err);
  }
};
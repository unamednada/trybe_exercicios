const fs = require('fs').promises;

module.exports = async function writeToFile(output, input) {
  await fs.writeFile(output, input, { flag: 'w' });
  return 'ok';
};

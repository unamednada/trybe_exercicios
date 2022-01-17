const fs = require('fs').promises;

module.exports = function arrayItemsToFile(array) {
  for (i = 1; i <= array.length; i += 1) {
    try {
      await fs.writeFile(`file${i}.txt`, array[i - 1], { flag: 'w' });
    } catch (err) {
      console.error(err);
    }
  }
};

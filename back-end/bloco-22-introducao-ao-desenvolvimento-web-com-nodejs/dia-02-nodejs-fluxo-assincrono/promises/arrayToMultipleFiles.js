const fs = require('fs').promises;

module.exports = async function arrayItemsToFile(array) {
  const filePromises = array.map((item, index) => fs.writeFile(`./file${index + 1}.txt`, item));
  await Promise.all(filePromises);
};

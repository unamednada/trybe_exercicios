const fs = require('fs').promises;

module.exports = function writeToFile(output, input) {
  return fs.writeFile(output, input, { flag: 'w' })
    .then(() => 'ok')
    .catch(err => err.message);
};

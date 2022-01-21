const fs = require('fs').promises;
const { question, readFile } = require('./readLine');

async function changeWord() {
  try {
    const content = await readFile();
    const oldWord = await question('Insert word to change:\n');
    const newWord = await question('Insert new word:\n');
    const newContent = `${content}`.replace(oldWord, newWord);
    console.log(newContent);
    const output = await question('Insert output filename:\n');
    await fs.writeFile(output, newContent);
  } catch (err) {
    console.error(err);
  }
};

module.exports = changeWord;

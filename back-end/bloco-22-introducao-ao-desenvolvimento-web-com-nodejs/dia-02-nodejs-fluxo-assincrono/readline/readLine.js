const fs = require('fs').promises;
const readline = require('readline');


async function question(message) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(message, answer => {
      rl.close();
      resolve(answer);
    })
  })
};

async function readFile() {
  const file = await question('Path to file:\n');
  try {
    const content = await fs.readFile(file, 'utf-8');
    if (content.length === 0) throw new Error(`Path to an empty file. Read ${file}`);
    return content;
  } catch (err) {
    return err;
  };
};

module.exports = {
  question,
  readFile
}

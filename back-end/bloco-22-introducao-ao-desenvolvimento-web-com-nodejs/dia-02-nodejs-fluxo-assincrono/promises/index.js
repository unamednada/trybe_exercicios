const arrayItemsToFile = require('./arrayToMultipleFiles');
const fs = require('fs').promises;

async function main() {
  await arrayItemsToFile(['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']);
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ];

  const fileContents = await Promise.all(
    fileNames.map(fileName => fs.readFile(fileName, 'utf-8'))
  );

  const newFile = fileContents.join(' ');
  await fs.writeFile('./fileAll.txt', newFile);
};

main();

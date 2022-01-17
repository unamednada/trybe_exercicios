const arrayItemsToFile = require('./arrayToMultipleFiles');

async function main() {
  await arrayItemsToFile(['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']);
}

main();

const funcThreeProm = require('./funcThreeProm');

const randomNum = () => Math.floor(Math.random() * 100 + 1);

funcThreeProm(1, 2, 3)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
  
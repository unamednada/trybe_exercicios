const funcThreeProm = require('./funcThreeProm');

const randomNum = () => Math.floor(Math.random() * 100 + 1);

const main = async () => {
  try {
    const result = await funcThreeProm(randomNum(), randomNum(), randomNum());
    console.log(result);
  } catch (err) {
    console.error(err);
  };
};

main();

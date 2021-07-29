const assert = require('assert');

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  // inspiração para damage: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  damage: () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15),
};

const battleMembers = { mage, warrior, dragon };

assert.strictEqual(typeof dragon.damage(), 'number');
assert.strictEqual(typeof warrior.damage(), 'number');
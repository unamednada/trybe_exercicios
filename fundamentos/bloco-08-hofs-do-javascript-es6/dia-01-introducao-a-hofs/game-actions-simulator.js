const assert = require('assert');
const { type } = require('os');

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
  damage: () => undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  // inspiração para damage: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
const warriorDmg = () => Math.floor(Math.random() * ((warrior.weaponDmg * warrior.strength) - warrior.strength + 1) + warrior.strength);
const mageSpell = () => mage.mana < 15 ? 'No mana left' : ({
  dmg: Math.floor(Math.random() * (mage.intelligence + 1) + mage.intelligence),
  manaCost: 15,
});

const gameActions = {

  warriorTurn: (warriorAtk) => {
    const dmg = warriorAtk();
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
  },
  mageTurn: (mageAtk) => {
    const { dmg, manaCost } = mageSpell();
    dragon.healthPoints -= dmg;
    mage.mana -= manaCost;
    mage.damage = dmg;
  },
  dragonTurn: (dragonAtk) => {
    const dmg = dragonDmg();
    warrior.healthPoints -= dmg;
    mage.healthPoints -= dmg;
    dragon.damage = dmg;
  },
  turn: () => {
    gameActions.warriorTurn(warriorDmg);
    gameActions.mageTurn(mageSpell);
    gameActions.dragonTurn(dragonDmg);
    console.table(battleMembers);
  }
};

assert.strictEqual(typeof dragonDmg(), 'number');
assert.strictEqual(typeof warriorDmg(), 'number');
assert.strictEqual(typeof mageSpell, 'function');
assert.strictEqual(typeof mageSpell(), 'object');
assert.strictEqual(Object.keys(mageSpell()).length, 2);
assert.strictEqual(typeof gameActions, 'object');

gameActions.turn();

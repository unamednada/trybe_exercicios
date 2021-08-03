const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Inspiração para regEx https://stackoverflow.com/questions/2903542/javascript-how-many-times-a-character-occurs-in-a-string

const containsA = () => names.reduce((totalA, name) => totalA + name.replace(/[^aA]/g, '').length, 0);

assert.deepStrictEqual(containsA(), 20);
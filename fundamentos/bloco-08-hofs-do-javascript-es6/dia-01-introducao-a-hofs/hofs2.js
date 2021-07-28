const assert = require('assert');

const casino = (number, game) => game(number) ? 'Parabéns, você ganhou!' : 'Tente novamente';

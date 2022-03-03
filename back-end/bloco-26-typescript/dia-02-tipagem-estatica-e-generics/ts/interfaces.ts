type Slices = 4 | 6 | 8;

type Common = 'Calabresa' | 'Frango' | 'Pepperoni';
type Veggie = 'Margerita' | 'Palmito' | 'Cogumelo';
type Sweet = 'Nutella' | 'M&M\'s';

interface Pizza {
  flavour: string,
  slices: Slices,
}

interface CommonPizza extends Pizza {
  flavour: Common,
}

interface VeggiePizza {
  flavour: Veggie,
}

interface SweetPizza {
  flavour: Sweet,
  slices: 4,
}

const calabresa: CommonPizza = {
  flavour: 'Calabresa',
  slices: 6,
};

console.log('Calabresa: ', calabresa);

const margerita: Pizza = {
  flavour: 'Margerita',
  slices: 6,
}

const nutella: Pizza = {
  flavour: 'Nutella',
  slices: 4,
}


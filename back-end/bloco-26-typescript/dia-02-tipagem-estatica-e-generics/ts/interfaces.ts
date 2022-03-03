type Slices = 4 | 6 | 8;

interface Pizza {
  flavour: string,
  slices: Slices,
}

const calabresa: Pizza = {
  flavour: 'Calabresa',
  slices: 8,
};

console.log(calabresa);

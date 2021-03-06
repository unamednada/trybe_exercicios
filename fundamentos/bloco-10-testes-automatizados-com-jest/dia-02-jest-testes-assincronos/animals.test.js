const {
  findAnimalsByType,
  findAnimalByName,
  getListAnimals,
  getAnimal,
  findAnimalsByAge,
  getAgeListAnimals
} = require('./animals.js');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise = findAnimalsByAge', () => {
  it('Quando existem animais com a idade procurada', () => {
    expect.assertions(1);
    return getAgeListAnimals(1).then(animalArray => {
      expect(animalArray).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
    });
  });

  it('Quando não existem animais com a idade procurada', () => {
    expect.assertions(1);
    return getAgeListAnimals(3).then(error => {
      expect(error).toEqual('Nenhum animal com essa idade!');
    });
  });

});
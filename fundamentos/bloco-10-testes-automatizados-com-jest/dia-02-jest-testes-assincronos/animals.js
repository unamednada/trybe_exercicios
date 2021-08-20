const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFilter = Animals.filter((animal) => animal.name === name);
      if (animalFilter.length !== 0) {
        const animal = animalFilter[0];
        return resolve(animal);
      };
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);
  
const getAnimal = (name) => {
  return findAnimalByName(name);
};

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalAgeFilter = Animals.filter((animal) => animal.age === age);
      if (animalAgeFilter.length !== 0) {
        return resolve(animalAgeFilter);
      };
      return reject('Nenhum animal com essa idade!');
    }, 150);
  })
);

const getAgeListAnimals = async (age) => {
  try {
    return await findAnimalsByAge(age);
  } catch (error) {
    return error;
  } 
}


module.exports = {
  findAnimalsByType,
  findAnimalByName,
  getListAnimals,
  getAnimal,
  findAnimalsByAge,
  getAgeListAnimals
}
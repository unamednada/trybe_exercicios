const assert = require('assert');

const createEmployee = (fullName) => {
  const nameArray = fullName.split(' ');
  const email = `${nameArray[0].toLowerCase()}_${nameArray[1].toLowerCase()}@trybe.com`
  return { fullName: fullName, email: email};
};

const newEmployees = (callBack) => {
  return {
    id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
};

const myCompanyStaff = newEmployees(createEmployee);
console.log(myCompanyStaff.id1);

assert.strictEqual(typeof myCompanyStaff.id1, 'object');

assert.strictEqual(typeof newEmployees, 'function');
assert.strictEqual(typeof newEmployees(createEmployee), 'object');
assert.strictEqual(typeof createEmployee, 'function');
assert.strictEqual(typeof createEmployee('Gustavo Dias'), 'object');
assert.deepStrictEqual(createEmployee('Gustavo Dias'), { fullName: 'Gustavo Dias', email: 'gustavo_dias@trybe.com'});

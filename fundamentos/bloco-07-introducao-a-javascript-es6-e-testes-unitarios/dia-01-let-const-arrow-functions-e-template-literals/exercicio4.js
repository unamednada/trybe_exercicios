const addToString = (str, word) =>  str.replace('x', word);

console.log(addToString('Tryber x aqui!', 'Bebeto'));

const mySkills = ['Webdev', 'Communication', 'Resilience', 'Data analysis', 'Project management'];

const returnSkills = () => {
  mySkills.sort();
  console.log(mySkills);
  return `${addToString('Tryber x aqui!', 'Gustavo')}! Minhas cinco principais habilidades são:
  ${mySkills.join(';\n  ')};
  #goTrybe`;
}

console.log(returnSkills());
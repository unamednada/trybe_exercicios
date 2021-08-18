const hydrate = (str) => {
  const copos = str.split('').reduce((sum, curr) => !isNaN(curr) ? sum + +curr : sum, 0); 
  return `${copos} copo${copos > 1 ? 's' : ''} de água`;
}

module.exports = hydrate;
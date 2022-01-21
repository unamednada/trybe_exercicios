const funcThreeProm = (par1, par2, par3) => {
  const promise = new Promise((resolve, reject) => {
    if ([par1, par2, par3].filter(par => typeof par !== 'number').length > 0) reject(new Error("Informe apenas números"));
    const value = (par1 + par2) * par3;
    if (value < 50) reject(new Error("Valor muito baixo"));
    return resolve(value);
  })
  return promise;
};

module.exports = funcThreeProm;
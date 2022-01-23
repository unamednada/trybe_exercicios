const CEP = require('../models/Cep');

const findByCep = async (cep) => {
  if (!CEP.CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }
  
  const returnCep = await CEP.findByCep(cep);

  if (!returnCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP Não encontrado',
      },
    };
  }

  return returnCep;
};

const create = async ({ cep, logradouro, bairro, cidade, localidade, uf }) => {
  const cepExists = await CEP.findByCep(cep);

  if (cepExists) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  return CEP.create({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
  findByCep,
  create,
};

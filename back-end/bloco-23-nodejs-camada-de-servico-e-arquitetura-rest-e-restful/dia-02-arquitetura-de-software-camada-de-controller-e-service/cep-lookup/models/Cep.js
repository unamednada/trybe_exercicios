const connection = require('./connection');

const CEP_FORMAT = /(\d{5})(\d{3})/;
const CEP_REGEX = /\d{5}-\d{3}/;

const treatCep = (cep) => cep.replace(/-/ig, '');

const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  
  return cep.replace(CEP_FORMAT, '$1-$2');
};

const getNewCep = ({ cep: rawCep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(rawCep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findByCep = async (cep) => {
  const treatedCep = treatCep(cep);
  
  const query = `SELECT cep, logradouro, bairro, localidade, uf
  FROM ceps WHERE cep = ?`;

  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => results.length ? results[0] : null);
  
  if (!result) return null;

  return getNewCep(result);
};

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = treatCep(rawCep);

  const query = `INSERT INTO ceps
  (cep, logradouro, bairro, localidade, uf)
  VALUES (?, ?, ?, ?, ?)`;

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  findByCep,
  create,
  CEP_REGEX,
};

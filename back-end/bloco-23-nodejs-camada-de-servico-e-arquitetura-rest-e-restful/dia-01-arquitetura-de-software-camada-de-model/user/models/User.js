const connection = require('./connection');

const validatePassword = (pass) => {
  if (pass.length < 6) {
    return false;
  }
  return true;
};

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.middle_name,
});

const create = async (firstName, lastName, email, password) => {
  const users = await getAll() || [];
  const id = users.length + 1;
  await connection.execute(
    `INSERT INTO users (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, password]
  );
  return ({ id, firstName, lastName, email });
};

const getAll = async () => {
  const [users] = await connection.execute(
    `SELECT id, first_name, last_name, email
    FROM users`
  );
  return users.map(serialize);
}

module.exports = {
  validatePassword,
  create,
  getAll,
};

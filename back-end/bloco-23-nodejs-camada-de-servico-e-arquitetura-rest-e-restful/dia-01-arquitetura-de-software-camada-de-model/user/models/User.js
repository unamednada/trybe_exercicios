const connection = require('./connection');

const validatePassword = (pass) => {
  if (pass.length < 6) {
    return false;
  }
  return true;
};

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
  return users;
}

const findById = async (id) => {
  const users = await getAll();
  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    return null;
  }
  return foundUser;
}

const update = async (id, newData) => {
  const changeUser = await findById(+id);
  if (!changeUser) {
    return null;
  }
  const { first_name, last_name, email, password } = newData;
  await connection.execute(
    `UPDATE users
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ?`,
    [first_name, last_name, email, password, id]
  );
  const returnUser = await findById(+id);
  return returnUser;
};

module.exports = {
  validatePassword,
  create,
  getAll,
  findById,
  update,
};

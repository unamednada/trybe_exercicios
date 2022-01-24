const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      `INSERT INTO model_example.movies
      (title, directed_by, release_year)
      VALUES (?, ?, ?)`,
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const findById = async (id) => {
  const [result] = await connection
    .execute(
      `SELECT title, directed_by, release_year
      FROM model_example.movies
      WHERE id = ?`, [id]
    );

  return {
    title: result[0].title,
    directedBy: result[0].directed_by,
    releaseYear: result[0].release_year,
  };
};

module.exports = {
  create,
  findById,
};

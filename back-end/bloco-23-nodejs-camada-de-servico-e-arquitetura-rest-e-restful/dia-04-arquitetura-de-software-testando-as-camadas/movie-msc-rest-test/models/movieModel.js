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
  const [movie] = await connection
    .execute(
      `SELECT title, directed_by, release_year
      FROM model_example.movies
      WHERE id = ?`, [id]
    );
  
  if (!movie.length) return null;
  
  const { title, directed_by, release_year } = movie[0];

  return {
    title,
    directedBy: directed_by,
    releaseYear: release_year,
  };
};

module.exports = {
  create,
  findById,
};

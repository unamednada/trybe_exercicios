const MovieModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MovieModel
    .create({ title, directedBy, releaseYear });

  return { id };
};

const findById = async (id) => {
  const movie = await MovieModel.findById(id);

  if (!movie) return null;

  const { title, releaseYear, directedBy } = movie;
  return {
    title,
    releaseYear,
    directedBy,
  };
};

module.exports = {
  create,
  findById,
};

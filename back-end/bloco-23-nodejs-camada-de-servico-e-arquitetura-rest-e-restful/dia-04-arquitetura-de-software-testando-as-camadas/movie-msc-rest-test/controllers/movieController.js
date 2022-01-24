const MovieService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directed_by, release_year } = req.body;

  const movie = await MovieService
    .create({ title, directedBy: directed_by, releaseYear: release_year });

  if (!movie) {
    return res
      .status(400)
      .send('Invalid data');
  }

  res
    .status(201)
    .send('Film created succesfully!');
};

module.exports = {
  create,
};

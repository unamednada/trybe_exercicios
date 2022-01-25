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

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MovieService.findById(id);
    if (!movie) {
      return res.status(404).send('Id not found');
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  create,
  findById,
};

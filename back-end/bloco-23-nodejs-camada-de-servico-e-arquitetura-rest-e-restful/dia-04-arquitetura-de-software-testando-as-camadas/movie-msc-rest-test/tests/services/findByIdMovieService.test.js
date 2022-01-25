const sinon = require('sinon');
const { expect } = require('chai');

const MovieService = require('../../services/movieService');
const MovieModel = require('../../models/movieModel');

const VALID_ID = 2;
const INVALID_ID = 10;

describe('Call findById service', () => {
  describe('when there is no movie', () => {
    before(async () => {
      sinon.stub(MovieModel, 'findById')
        .resolves(null);
    });

    after(async () => {
      MovieModel.findById.restore();
    });

    it('returns null', async () => {
      const response = await MovieService.findById(INVALID_ID);

      expect(response).to.be.eq(null);
    });
  });

  describe('when there is a movie', () => {
    const returnMovie = {
      title: 'Avatar',
      directedBy: 'James Cameron',
      releaseYear: 2009,
    };

    before(async () => {
      sinon.stub(MovieModel, 'findById')
        .resolves(returnMovie);
    });

    after(async () => {
      MovieModel.findById.restore();
    });

    it('returns an object', async () => {
      const response = await MovieService.findById(VALID_ID);

      expect(response).to.be.a('object');
    });

    it('is not empty', async () => {
      const response = await MovieService.findById(VALID_ID);

      expect(response).to.be.not.empty;
    });

    it('contains the keys title, releaseYear and directedBy', async () => {
      const response = await MovieService.findById(VALID_ID);

      expect(response).to.include.all.keys('title', 'releaseYear', 'directedBy');
    });

    it('contains the correct data of inserted movie', async () => {
      const response = await MovieService.findById(VALID_ID);

      const { title, directedBy, releaseYear } = response;

      expect(title).to.be.eq(returnMovie.title);
      expect(directedBy).to.be.eq(returnMovie.directedBy);
      expect(releaseYear).to.be.eq(returnMovie.releaseYear);
    });
  });
});

const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Find movie by id in DB', () => {
  const VALID_ID = 2;
  const returnMovie = {
    title: 'Avatar',
    directed_by: 'James Cameron',
    release_year: 2009,
  };

  before(async () => {
    const SELECT_SUCCESS = [[returnMovie]];

    sinon.stub(connection, 'execute').resolves(SELECT_SUCCESS);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('when the id exists in DB', () => {
    it('returns an object', async () => {
      const response = await MovieModel.findById(VALID_ID);

      expect(response).to.be.a('object');
    });

    it('contains the correct data of inserted movie', async () => {
      const response = await MovieModel.findById(VALID_ID);

      expect(response).to.have.property('title');
      expect(response).to.have.property('directedBy');
      expect(response).to.have.property('releaseYear');
      const { title, directedBy, releaseYear } = response;
      expect(title).to.be.eq(returnMovie.title);
      expect(directedBy).to.be.eq(returnMovie.directed_by);
      expect(releaseYear).to.be.eq(returnMovie.release_year);
    });
  })
});

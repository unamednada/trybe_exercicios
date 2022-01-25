const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = require('../../models/movieModel');
const connection = require('../../models/connection');


describe('Find movie by id in DB', () => {
  const VALID_ID = 2;
  const INVALID_ID = 10;
  const returnMovie = {
    title: 'Avatar',
    directed_by: 'James Cameron',
    release_year: 2009,
  };

  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('when the id doesn\'t exist in DB', () => {

    before(async () => {
      const SELECT_FAIL = null;
  
      sinon.stub(MovieModel, 'findById').resolves(SELECT_FAIL);
    });
  
    after(async () => {
      MovieModel.findById.restore();
    });

    it('returns null', async () => {
      const response = await MovieModel.findById(INVALID_ID);

      expect(response).to.be.eq(null);
    });
  });

  describe('when the id exists in DB', () => {

    before(async () => {
      const SELECT_SUCCESS = returnMovie;
  
      sinon.stub(MovieModel, 'findById').resolves(SELECT_SUCCESS);
    });
  
    after(async () => {
      MovieModel.findById.restore();
    });

    it('returns an object', async () => {
      const response = await MovieModel.findById(VALID_ID);

      expect(response).to.be.a('object');
    });

    it('contains the correct data of inserted movie', async () => {
      const response = await MovieModel.findById(VALID_ID);

      expect(response).to.include.all.keys('title', 'releaseYear', 'directedBy');
      const { title, directedBy, releaseYear } = response;
      expect(title).to.be.eq(returnMovie.title);
      expect(directedBy).to.be.eq(returnMovie.directed_by);
      expect(releaseYear).to.be.eq(returnMovie.release_year);
    });
  });
});

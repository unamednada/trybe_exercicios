const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Insert new movie in DB', () => {
  const payloadMovie = {
    title: 'Foo Kombat',
    directedBy: 'Sisters Karamazov',
    releaseYear: 2020,
  }

  before(async () => {
    const INSERT_SUCCESS = [{ insertId: 1}];

    sinon.stub(connection, 'execute').resolves(INSERT_SUCCESS);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('when insetion is succesful', () => {
    it('returns an object', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('contains the id of inserted movie', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
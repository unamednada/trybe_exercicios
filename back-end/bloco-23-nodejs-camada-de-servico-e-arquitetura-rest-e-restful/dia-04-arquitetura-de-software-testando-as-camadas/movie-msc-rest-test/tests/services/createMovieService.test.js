const sinon = require('sinon');
const { expect } = require('chai');

const MovieService = require('../../services/movieService');
const MovieModel = require('../../models/movieModel');

describe('Call create service', () => {
  describe('when movie payload is not valid', () => {
    const payloadMovie = {};

    it('returns a boolean', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('is false', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('when insertion is succesful', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MovieModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MovieModel.create.restore();
    });

    it('returns an object', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('contains the id of inserted movie', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});
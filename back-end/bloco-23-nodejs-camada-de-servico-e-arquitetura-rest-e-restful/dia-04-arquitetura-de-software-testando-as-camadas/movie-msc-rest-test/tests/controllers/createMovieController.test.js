const sinon = require('sinon');
const { expect } = require('chai');

const MovieController = require('../../controllers/movieController');
const MovieService = require('../../services/movieService');

describe('Call create controller', () => {
  describe('with invalid payload', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'create')
        .resolves(false);
    })

    after(() => { MovieService.create.restore(); });

    it('returns code 400', async () => {
      await MovieController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('returns message \'Invalid data\'', async () => {
      await MovieController.create(request, response);

      expect(response.send.calledWith('Invalid data')).to.be.equal(true);
    });

  });

  describe('with valid payload', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'create')
        .resolves(true);
    });

    after(() => { MovieService.create.restore(); });

    it('returns code 201', async () => {
      await MovieController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('returns message \'Film created succesfully!\'', async () => {
      await MovieController.create(request, response);

      expect(response.send.calledWith('Film created succesfully!')).to.be.equal(true);
    });

  });
});
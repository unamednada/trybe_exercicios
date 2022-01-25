const sinon = require('sinon');
const { expect } = require('chai');

const MovieController = require('../../controllers/movieController');
const MovieService = require('../../services/movieService');

const VALID_ID = 2;
const INVALID_ID = 10;

describe('Call findById controller', () => {
  describe('with invalid id', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = { id: INVALID_ID };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'findById')
        .resolves(null);
    });

    after(() => { MovieService.findById.restore(); });

    it('returns code 404', async () => {
      await MovieController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equals(true);
    });

    it('returns message \'Id not found\'', async () => {
      await MovieController.findById(request, response);

      expect(response.send.calledWith('Id not found')).to.be.eq(true);
    });
  });

  describe('with valid id', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = { id: VALID_ID };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'findById')
        .resolves({
          title: 'Avatar',
          directedBy: 'James Cameron',
          releaseYear: 2009,
        });
    });

    after(() => { MovieService.findById.restore(); });

    it('returns conde 200', async () => {
      await MovieController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.eq(true);
    });

    it('returns a json object', async () => {
      await MovieController.findById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.eq(true);
    });
  });
});
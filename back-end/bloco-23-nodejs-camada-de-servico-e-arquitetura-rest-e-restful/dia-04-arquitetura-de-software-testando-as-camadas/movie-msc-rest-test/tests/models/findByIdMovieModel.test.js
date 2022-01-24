const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = {
  findById: (id) => ({}),
};

describe('Find movie by id in DB', () => {
  describe('when the id exists in DB', () => {
    const ID = 2;
    const returnMovie = {
      title: 'Avatar',
      directedBy: 'James Cameron',
      releaseYear: '2009'
    };

    it('returns an object', async () => {
      const response = await MovieModel.findById(ID);

      expect(response).to.be.a('object');
    });

    it('contains the correct data of inserted movie', async () => {
      const response = await MovieModel.findById(ID);

      expect(response).to.have.property('title');
      expect(response).to.have.property('directedBy');
      expect(response).to.have.property('releaseYear');
      const { title, directedBy, releaseYear } = response;
      expect(title).to.be.eq(returnMovie.title);
      expect(directedBy).to.be.eq(returnMovie.directedBy);
      expect(releaseYear).to.be.eq(returnMovie.releaseYear);
    });
  })
});

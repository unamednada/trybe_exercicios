const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');
const writeToFile = require('../writeToFile');
const FUNCTION = 'function';
const FILENAME = 'file.txt';
const CONTENT = 'hello, world!';
const OK = 'ok';
const STRING = 'string';

describe('Write to file', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').returns('ok');
  });

  it('is a function', () => {
    expect(writeToFile).to.be.a(FUNCTION);
  });

  describe('when receives two correct parameters',  () => {
    it('returns ok', async () => {
      expect(await writeToFile(FILENAME, CONTENT)).to.be.equals(OK);
    });
  });
});
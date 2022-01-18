const { expect } = require('chai');
const fs = require('fs').promises;
const writeToFile = require('../writeToFile');
const FUNCTION = 'function';
const FILENAME = 'file.txt';
const CONTENT = 'hello, world!';
const OK = 'ok';
const STRING = 'string';

describe('Write to file', () => {
  before(() => {
    fs.unlink(FILENAME);
  });

  it('is a function', () => {
    expect(writeToFile).to.be.a(FUNCTION);
  });

  describe('when receives two correct parameters',  () => {
    it('returns ok', async () => {
      expect(await writeToFile(FILENAME, CONTENT)).to.be.equals(OK);
    });

    it('creates the file if it doesn\'t exist', async () => {
      writeToFile(FILENAME, CONTENT);
      const file = JSON.stringify(await fs.readFile(FILENAME));
      expect(file).to.be.a(STRING);
    });
  });
});
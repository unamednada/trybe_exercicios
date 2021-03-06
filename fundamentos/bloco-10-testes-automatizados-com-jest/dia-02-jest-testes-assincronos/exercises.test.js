const {
  uppercase: upperCase,
  findUserById,
  getUserName
} = require('./exercises.js');

describe('Test if uppercase works as expected', () => {

  it('shoulbe be a function', () => {
    expect(typeof upperCase).toBe('function');
  });

  it('returns a string', (done) => {
    upperCase('', (result) => {
      try {
        expect(typeof result).toBe('string');
        done();
      } catch (error) {
        done(error);
      };
    });
  });

  it('returns an uppercase string', (done) => {
    upperCase('hello, world', (result) => {
      try {
        expect(result).toBe('HELLO, WORLD');
        done();
      } catch (error) {
        done(error);
      };
    });
  });

});

describe('Test if getUserName works as expected', () => {
  
  it('with a valid id', () => {
    expect.assertions(1);
    return getUserName(1)
    .then((response) => {
      expect(response).toBe('Mark');
    });
  });

  it('with an invalid id', () => {
    expect.assertions(1);
    return getUserName(3)
    .catch((error) => {
      expect(error.message).toBe('User with 3 not found.');
    });
  });

});

describe('Repeat userName tests using async/await', () => {

  it('with a valid id', async () => {
    const response = await getUserName(2);
    expect(response).toBe('Paul');
  });

  it('with an invalid id', async () => {
    try {
      const response = await getUserName(7);
    } catch (error) {
      expect(error.message).toBe('User with 7 not found.');
    };
  });

});
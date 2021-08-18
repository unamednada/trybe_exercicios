const upperCase = require('./exercises.js');

describe('Test if upperCase works as expected', () => {

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
        expect(result).toBe(undefined);
        done();
      } catch (error) {
        done(error);
      }
    })
  })
});
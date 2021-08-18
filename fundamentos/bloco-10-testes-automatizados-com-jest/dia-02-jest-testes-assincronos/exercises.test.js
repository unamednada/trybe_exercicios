const upperCase = require('./exercises.js');

describe('Test if upperCase works as expected', () => {

  it('Test if upperCase is a function', () => {
    expect(typeof upperCase).toBe('function');
  });

  it('Test if upperCase returns a string', (done) => {
    upperCase('', (result) => {
      try {
        expect(typeof result).toBe('string');
        done();
      } catch (error) {
        done(error);
      };
    });
  });

});
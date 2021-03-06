const assert = require('assert');

class PasswordVerifier {

  Verify (password) {
    if (!password) return false;
    if (password.length <= 8) return false;
    const upperCase = password.split('').filter((letter) => letter.toUpperCase() === letter);
    if (upperCase.length === 0) return false;
    const lowerCase = password.split('').filter((letter) => letter.toLowerCase() === letter);
    if (lowerCase.length === 0) return false;
    const numbers = password.split('').filter((letter) => typeof letter === 'number');
    if (numbers.length === 0) return false;
    return true;
  }

};

const verify = new PasswordVerifier();

assert.strictEqual(typeof PasswordVerifier, 'function');
assert.strictEqual(typeof verify, 'object');
assert.strictEqual(verify.Verify(), false);
assert.strictEqual(verify.Verify('123'), false);
assert.strictEqual(verify.Verify('aaaaaaaaa'), false);
assert.strictEqual(verify.Verify('Aaaaaaaaa'), false);
assert.strictEqual(verify.Verify('AAAAAAAAA'), false);
assert.strictEqual(verify.Verify('aaaaaAaaAa'), false);
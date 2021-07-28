const assert = require('assert');

class PasswordVerifier {

  Verify(password) {
    if (!password) return false;
    if (password.length <= 8) return false;
    return true;
  }

};

const verify = new PasswordVerifier();

assert.strictEqual(typeof PasswordVerifier, 'function');
assert.strictEqual(typeof verify, 'object');
assert.strictEqual(verify.Verify(), false);
assert.strictEqual(verify.Verify('123'), false);
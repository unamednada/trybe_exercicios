const assert = require('assert');

class PasswordVerifier {

  Verify(password) {
    return password ? password.length > 8 : false;
  }

};

const verify = new PasswordVerifier();

assert.strictEqual(typeof PasswordVerifier, 'function');
assert.strictEqual(typeof verify, 'object');
assert.strictEqual(verify.Verify(), false);
assert.strictEqual(verify.Verify('123'), false);
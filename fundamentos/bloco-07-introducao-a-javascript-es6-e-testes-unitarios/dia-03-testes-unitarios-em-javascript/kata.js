const assert = require('assert');

class PasswordVerifier {

  Verify() {
    return true;
  }

};

const verify = new PasswordVerifier();

assert.strictEqual(typeof PasswordVerifier, 'function');
assert.strictEqual(verify.Verify(), true);

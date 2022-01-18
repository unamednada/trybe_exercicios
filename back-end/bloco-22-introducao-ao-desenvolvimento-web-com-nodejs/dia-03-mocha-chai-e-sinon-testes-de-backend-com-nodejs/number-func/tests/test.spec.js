const { expect } = require('chai');

const checkNumSign = require('../checkNumSign');
const FUNC = 'function';
const STRING = 'string';
const NEG_NUM = Math.floor(Math.random() * -10);
const ZERO = 0;
const POS_NUM = Math.floor(Math.random() * 10);
const NEGATIVE = 'negative';
const NEUTRAL = 'neutral';
const POSITIVE = 'positive';

describe('checkNumSign', () => {
  describe('is a function', () => {
    expect(typeof checkNumSign).to.be.equals(FUNC);
  });

  describe('when parameter is a number', () => {
    it('returns a string', () => {
      expect(checkNumSign(POS_NUM)).to.be.a(STRING);
      expect(checkNumSign(NEG_NUM)).to.be.a(STRING);
      expect(checkNumSign(ZERO)).to.be.a(STRING);
    });

    it('returns \'negative\' when number is negative', () => {
      expect(checkNumSign(NEG_NUM)).to.be.equals(NEGATIVE);
    });

    it('returns \'positive\' when number is positive', () => {
      expect(checkNumSign(POS_NUM)).to.be.equals(POSITIVE);
    });

    it('returns \'neutral\' when number is zero', () => {
      expect(checkNumSign(ZERO)).to.be.equals(NEUTRAL);
    });
  });
});

module.exports = function checkNumSign(num) {
  if (typeof num !== 'number') {
    throw new TypeError('parameter must be a number');
  };
  switch (true) {
    case num > 0:
      return 'positive';
    case num < 0:
      return 'negative';
    default:
      return 'neutral';
  };
};

module.exports = function checkNumSign(num) {
  switch (true) {
    case num > 0:
      return 'positive';
    case num < 0:
      return 'negative';
    default:
      return 'neutral';
  };
};

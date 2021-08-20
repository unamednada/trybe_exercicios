const randomToTest = () => Math.floor(Math.random() * 101);

const toUpper = (str) => str.toUpperCase();
const firstChar = (str) => str[0];
const concat = (str1, str2) => str1 + str2; 

module.exports = { randomToTest,
toUpper,
firstChar,
concat };
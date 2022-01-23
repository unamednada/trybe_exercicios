const fetch = require('node-fetch');

const fetchPrice = async () => {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json);');
  if (response.ok) {
    const responseJson = await response.json();
    const { bpi: { USD: { rate } } } = responseJson;
    return rate;
  }
  throw new Error('Error in the API fetch. Please see \'https://api.coindesk.com/v1/bpi/currentprice/BTC.json);\'');
};

module.exports = fetchPrice;

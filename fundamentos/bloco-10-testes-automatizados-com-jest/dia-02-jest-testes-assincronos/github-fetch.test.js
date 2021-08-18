const getRepos = require('./github-fetch.js');

describe('Test if getRepos returns desired list of repos', () => {

  it('with no URL', async () => {
    try {
      const response = await getRepos();
    } catch (error) {
      console.log(error.message);
    };
  });

  it('with an invalid URL', async () => {
    const response = await getRepos('https://www.google.com');
  })
});
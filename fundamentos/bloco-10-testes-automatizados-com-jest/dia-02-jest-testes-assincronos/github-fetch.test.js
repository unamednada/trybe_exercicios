const getRepos = require('./github-fetch.js');

describe('Test if getRepos returns desired list of repos', () => {

  it('with no URL', async () => {
    try {
      const response = await getRepos();
    } catch (error) {
      console.log(error.message);
    }
  })
});
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
    try {
      const response = await getRepos('https://www.google.com');
    } catch (error) {
      console.log(error);
    };
  });

  it('with the correct URL', async () => {
    const response = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(response).toEqual(expect.arrayContaining(['sd-01-week4-5-project-todo-list']));
  });

});
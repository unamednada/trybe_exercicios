const fs = require('fs').promises;

const readJson = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  };
};

const writeJson = async (path, content) => {
  try {
    const curContent = await readJson(path);

    curContent.push(content);
    await fs.writeFile(path, JSON.stringify(curContent));

    return content;
  } catch (error) {
    return null;
  };
};

module.exports = {
  readJson,
  writeJson
};

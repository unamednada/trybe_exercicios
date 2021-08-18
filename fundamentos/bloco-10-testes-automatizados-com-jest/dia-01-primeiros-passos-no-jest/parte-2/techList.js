const techList = (techs) => techs.length !== 0 ? techs.sort().map((tech) => ({ tech, name: 'Lucas'})) : 'Vazio!';

module.exports = techList;
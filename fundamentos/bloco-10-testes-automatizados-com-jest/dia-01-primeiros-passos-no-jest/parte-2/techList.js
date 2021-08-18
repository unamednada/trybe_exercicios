const techList = (techs, name) => techs.length !== 0 ? techs.sort().map((tech) => ({ tech, name })) : 'Vazio!';

module.exports = techList;
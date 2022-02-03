const User = (sequelize, DataTypes) => sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = User;
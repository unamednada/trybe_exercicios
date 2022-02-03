const User = (sequelize, DataTypes) => {
  // eslint-disable-next-line no-shadow
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
  });

  return User;
};

module.exports = User;
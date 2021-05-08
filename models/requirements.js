module.exports = (sequelize, DataTypes) => {
  const Requirements = sequelize.define(
    'Requirements',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      badge_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Requirements;
};
module.exports = (sequelize, DataTypes) => {
  const Mentor = sequelize.define(
    'Mentor',
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      team_number: {
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
  return Mentor;
};

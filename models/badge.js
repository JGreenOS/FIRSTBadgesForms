module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define(
    'Badge',
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
      electronics_one_completed: {
        type: DataTypes.BOOLEAN,
      },
      electronics_two_completed: {
        type: DataTypes.BOOLEAN,
      },
      leadership_one_completed: {
        type: DataTypes.BOOLEAN,
      },
      leadership_two_completed: {
        type: DataTypes.BOOLEAN,
      },
      participation_one_completed: {
        type: DataTypes.BOOLEAN,
      },
      participation_two_completed: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Badge;
};

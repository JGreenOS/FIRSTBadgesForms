module.exports = (sequelize, DataTypes) => {
  const StudentReqRecords = sequelize.define(
    'StudentReqRecords',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      req_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      date_received: {
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
  return StudentReqRecords;
};

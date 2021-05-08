// Creating the student model

module.exports = function(sequelize, DataTypes) {
    const Student = sequelize.define("Student", {
      // The email cannot be null, and must be a proper email before creation
      // first name - last name - email - team number
      // Do not believe they will need a badge_id for adding, but unsure
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      team_number: {
        type: DataTypes.INT,
        allowNull: false
      }
    });
    return Student;
  };
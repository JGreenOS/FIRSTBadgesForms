const db = require('../models');

module.exports = (app) => {
  //Viewing Current Attendance (the attendance table)
  app.get(????, (req, res) => {
    db.Attendance.findOne({
      where: {
        id: req.params.id,
      },
    }).then((attPost) => {
      const hbsObject = {
        att: attPost,
      };
      res.send(hbsObject);
    });
  });
  app.get('/api/attendance/', (req, res) => {
    db.Attendance.findAll({}).then((attPost) => {
      const hbsObject = {
        att: attPost,
      };
      res.send(hbsObject);
    });
  });
};

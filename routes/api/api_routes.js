const db = require('../models');

module.exports = (app) => {
  //Adding a student to the Student Info
  //POST
  app.post('???', (req, res) => {
    console.log(req.body);
    db.StudentInfo.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      team_number: req.body.team_number,
    }).then((stuInfoPost) => res.json(stuInfoPost));
  });

  app.post('???', (req, res) => {
    console.log(req.body);
    db.StudentReqRecords.create({
      email: req.body.email,
      team_number: req.body.team_number,
      req_id: req.body.req_id,
      email: req.body.email,
    }).then((stuReqPost) => res.json(stuReqPost));
  });

  app.get('???', (req, res) => {
    db.sequelize
      .query(
        `SELECT students.first_name, students.last_name, badge.id, mentor.team FROM students
LEFT JOIN badge on students.badge_id = badge.id 
LEFT JOIN mentor on mentor.team = students.team_number LIMIT 0, 1000`
      )({})
      .then((reqPost) => {
        const hbsObject = {
          att: reqPost,
        };
        res.send(hbsObject);
      });
  });
};

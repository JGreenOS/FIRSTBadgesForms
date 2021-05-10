const { sequelize } = require('../../models');
const db = require('../../models');

module.exports = (app) => {
  //Adding a student to the Student Info
  //POST
  app.post('/form/newstudent', (req, res) => {
    console.log(req.body);
    db.StudentInfo.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      team_number: req.body.team_number,
    }).then((stuInfoPost) => res.json(stuInfoPost));
  });

  app.post('/form/sturequirements', (req, res) => {
    console.log(req.body);
    db.StudentReqRecords.create({
      email: req.body.email,
      req_id: req.body.req_id,
      date_received: req.body.date_received,
    }).then((stuReqPost) => res.json(stuReqPost));
  });

  app.get('/teamprofile', (req, res) => {
    console.log('Inside GET route');
    db.sequelize
      .query(
        `SELECT student_info.first_name, student_info.last_name, req_id, student_info.team_number
        FROM stu_req_records
        INNER JOIN student_info ON stu_req_records.email=student_info.email
        INNER JOIN mentor ON student_info.team_number=mentor.team_number`,
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((reqPost) => {
        const hbsObject = {
          att: reqPost,
        };
        res.send(hbsObject);
      });
  });
};

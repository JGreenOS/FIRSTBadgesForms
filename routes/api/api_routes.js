const { sequelize } = require('../../models');
const db = require('../../models');
const passport = require('../config/passport');


module.exports = (app) => {
  //POST
  //Add new student
  app.post('/api/form/newstudent', (req, res) => {
    console.log(req.body);
    db.StudentInfo.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      team_number: req.body.team_number,
    }).then((stuInfoPost) => res.json(stuInfoPost));
  });

  app.post('/api/form/sturequirements', (req, res) => {
    console.log(req.body);
    db.StudentReqRecords.create({
      email: req.body.email,
      req_id: req.body.req_id,
      date_received: req.body.date_received,
    }).then((stuReqPost) => res.json(stuReqPost));
  });

  //GET
  //search for a student and to list  (to update badge requirements)
  app.get('/api/form/getstudent', (req, res) => {
    db.StudentReqRecords.findAll({}).then((stuGet) => res.json(stuGet));
  });

  //Team Profile- will be displayed in a table.
  app.get('/api/teamprofile', (req, res) => {
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

  //UPDATE
  app.put('/api/updatereqs', (req, res) => {
    db.StudentReqRecords.update(req.body, {
      where: {
        req_id: req.body.req_id,
      },
    }).then((updateReq) => res.json(updateReq));
  });
};

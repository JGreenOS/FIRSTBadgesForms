const { sequelize } = require('../../models');
const db = require('../../models');
const passport = require('passport');

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
    db.StudentReqRecords.findOne({
      where: {
        email: req.params.email,
      },
    }).then((stuGet) => res.json(stuGet));
  });

  app.get('/api/team/getteam', (req, res) => {
    db.StudentInfo.findAll({
      where: {
        team_number: req.params.team_number,
      },
    }).then((stuTeam) => res.json(stuTeam));
  });

  //Team Profile- will be displayed in a table.
  app.get('/api/teamprofile', (req, res) => {
    const teamNumber = req.query.team_number;
    db.sequelize
      .query(
        `SELECT studentinfo.team_number,  studentreqrecords.req_id, studentinfo.email AS email, studentinfo.first_name AS Student_First_name, studentinfo.last_name AS Student_Last_Name, requirements.badge_name AS Badge_Name
FROM studentinfo
JOIN studentreqrecords ON studentreqrecords.email=studentinfo.email
JOIN requirements ON requirements.id=studentreqrecords.req_id
WHERE studentinfo.team_number = ?`,
        {
          replacements: [teamNumber],
          type: sequelize.QueryTypes.SELECT,
        }
      )
      .then((reqPost) => {
        const hbsObject = {
          items: reqPost,
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

  //PASSPORT SIGN IN LOGIN LOGOUT
  //SIGNUP
  app.post('/api/signup', function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        res.json('Done');
      })
      .catch(function (err) {
        // res.status(401).json(err);
        console.log(err);
      });
  });
  //LOGIN
  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    res.json(true);
  });

  //LOGOUT
  app.get('/logout', function (req, res) {
    req.logout();
    res.send('Logout Successful');
  });

  //USER DATA ONCE LOGGED IN
  app.get('/api/userdata', function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
};

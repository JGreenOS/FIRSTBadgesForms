const express = require('express');
const cors = require('cors');
//store private api key
require('dotenv').config();
var session = require('express-session');

const passport = require('passport');
//sequelize
const db = require('./models');

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = process.env.PORT || 8080;

//middleware

const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    
    db.User.findOne({
      where: {
        email: username,
      },
    }).then(function (dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: 'Incorrect email.',
        });
      } else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.',
        });
      }
      return done(null, dbUser);
    });
  })
);

app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require('./routes/api/api_routes')(app);

// Start the API server
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`"🌎  ==> API Server now listening on PORT ${PORT}!")`)
  );
});

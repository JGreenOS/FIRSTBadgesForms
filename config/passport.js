// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const db = require('../models');

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     console.log('object');
//     db.User.findOne({
//       where: {
//         email: username,
//       },
//     }).then(function (dbUser) {
//       if (!dbUser) {
//         return done(null, false, {
//           message: 'Incorrect email.',
//         });
//       } else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: 'Incorrect password.',
//         });
//       }
//       return done(null, dbUser);
//     });
//   })
// );

// module.exports = passport;

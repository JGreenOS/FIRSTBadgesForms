
const express = require('express');
const db = require('./models');


// const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view

// require('./routes/html_routes.js')(app);
require('./routes/api/api_routes')(app);
// require('./routes/student_api_routes.js')(app);
// require('./routes/passport_api_routes')(app);

// Start the API server
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`"🌎  ==> API Server now listening on PORT ${PORT}!")`)
  );
});

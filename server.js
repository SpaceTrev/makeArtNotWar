const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'sergeisucksergeisuckseggs', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Requiring our models for syncing
const db = require("./models");

//**IF HANDLEBARS IS USED
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./routes/auth-routes.js')(app, passport);
require('./config/passport/passport.js')(passport, db.User);

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/job-api-routes.js")(app);


db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

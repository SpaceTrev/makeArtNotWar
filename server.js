const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Requiring our models for syncing
const db = require("./models");

//**IF HANDLEBARS IS USED
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// const routes = require('./controllers/creation_controller.js');
// app.use(routes);

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/job-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

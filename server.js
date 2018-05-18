const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const server = express();
server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// const exphbs = require('express-handlebars');
// server.engine("handlebars", exphbs({ defaultLayout: "main" }));
// server.set("view engine", "handlebars");
// const routes = require('./controllers/creation_controller.js');
// server.use(routes);
server.listen(PORT, ()=>{
    console.log('Listening on localhost:' + PORT);
})

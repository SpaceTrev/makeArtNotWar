// Routes
// =============================================================
const db = require("../models/index.js");
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      db.Job.findAll({}).then(function(data) {
        let hbsObject = {
          jobs: data
        };
        res.render('index', hbsObject);
        
      });
    });
  
    // cms route loads cms.html
    app.get("/post", function(req, res) {
      res.render('post');
    });
    
    app.post("/post", function(req, res) {
      console.log(req.body)
      db.Job.create(req.body).then(function(dbJob) {
        res.json(dbJob);
      }).catch(function(err){
        console.log(err);
        res.json(err);
      });
    });
    // job route loads job.html
    app.get("/job", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/job.html"));
    });
    
  };
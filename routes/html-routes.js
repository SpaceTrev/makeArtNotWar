// Routes
// =============================================================
const db = require("../models/index.js");
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      db.Job.findAll({}).then(function(data) {
        let hbsObject = {
          jobs: data,
          user:req.user
        };
        res.render('index', hbsObject);
        
      });
    });
  
    // cms route loads cms.html
    app.get("/post",  isLoggedIn,function(req, res) {
      let hbsObject = {
        user:req.user
      };
      res.render('post', hbsObject);
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
    

    function isLoggedIn(req, res, next) {

      if (req.isAuthenticated())

          return next();

      res.redirect('/signin');

  }

  };
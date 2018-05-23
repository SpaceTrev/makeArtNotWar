// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    // cms route loads cms.html
    app.get("/cms", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/cms.html"));
    });
  
    // job route loads job.html
    app.get("/job", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/job.html"));
    });
    
  };
const db = require("../models/index.js");
module.exports = {
    signup: (req, res) => {
        res.render('signup');
    },
    signin: (req, res) => {
        res.render('login');
    },
    dashboard: (req, res) => {
        db.Job.findAll({}).then(function(data) {
            let hbsObject = {
              jobs: data,
              user:req.user
            };
            res.render('index', hbsObject);
            
          });
    },
    logout: (req, res) => {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
}



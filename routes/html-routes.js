// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
const db = require("../models")
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

// Each of the below routes just handles the HTML page that the user gets sent to.



  // index route loads view.html
  app.get("/", function(req, res) {
    db.Meme.findAll().then(function(results){
      console.log(results)
      res.render('index', {Memes:results});
    })


    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    // res.sendFile(path.join(__dirname, "../views/memePage.handlebars"));
  });

  app.get("/memespage", function(req, res) {
    res.render('meme');
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    // res.sendFile(path.join(__dirname, "../views/memePage.handlebars"));
  });

};


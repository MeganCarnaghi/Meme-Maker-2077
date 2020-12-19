// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

const {
    func
} = require("Joi");
var db = require("../models");

//Routes
//==============================================================
module.exports = function (app) {

// GET route for getting all of the memes

app.get("/api/memes/", function (req, res) {
    db.Post.findAll({})
        .then(function (memes_db) {
            res.json(memes_db);
        });
});

// Get route for returning memes 
app.get("/api/memes/images/", function (req, res) {
    db.Post.findAll({
            where: {
                image: req.params.image
            }
        })
        .then(function (memes_db) {
            res.json(memes_db);
        });
});


// POST route for saving a new post
app.post("/api/posts", function(req, res) {
console.log(req.body);
    db.Post.create({
        text: req.body.title,
        image: req.body.body,
        });
})
    .then(function(memes_db) {
    res.json(memes_db);
    });
}


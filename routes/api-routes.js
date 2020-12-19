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

    // Get route for returning memes of a specific category

    app.get("/api/memes/category/:category", function (req, res) {
        db.Post.findAll({
                where: {
                    category: req.params.category
                }
            })
            .then(function (memes_db) {
                res.json(memes_db);
            });
    });

    app.get("/api/memes/:id", function (req, res) {
        console.log(req.body);
        db.Post.create({
                title: req.body.title,
                body: req.body.body,
                category: req.body.category
            })
            .then(function (memes_db) {
                res.json(memes_db);
            });
    });

};
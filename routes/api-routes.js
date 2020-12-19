var db = require("../models");

//Routes
//==============================================================
module.exports = function (app) {

// GET route for getting all of the memes

app.get("/api/memes/:id", function (req, res) {
    db.Meme.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(memes_db) {
          res.json(memes_db);
        });
    });

app.get("/api/memes", function (req, res) {
    db.Meme.findAll({})
        .then(function (memes_db) {
            res.json(memes_db);
        });
});


// POST route for saving a new post
app.post("/api/memes", function(req, res) {
console.log(req.body);
    db.Meme.create(req.body).then(function(memes_db) {
    res.json(memes_db);
    });
});
}

const express = require("express");
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port %s", PORT);
    });
});

app.use(express.static("public"));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const routes = require("");


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  
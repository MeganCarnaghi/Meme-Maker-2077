const express = require("express");
const bodyParser = require('body-Parser');
const app = express();
const joi = require('Joi');

app.get("/", function(req, res){
    res.send("Server is up and running.");
})

app.use(express.static("public"));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const routes = require("");


app.listen(3000, function() {
    consle.log("Server is running on port 3000.");
});
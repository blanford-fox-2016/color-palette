var express = require("express");
var app = express();
var helpers = require('./helpers/color')

app.set('view engine', 'jade');

app.get("/", function (req, res) {
  helpers.getPallete(function (palet){
    res.render("index", { palette: palet });
  })
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);

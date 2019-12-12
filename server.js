var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

var albumData = require(__dirname + '/albumData.json');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(express.static(__dirname));


app.get("/", function(req,res){
  res.status(200).render('homePage',{
    albumData: albumData
  });
});

app.get("*", function(req,res){
  res.status(404).render('404Page');
});


app.listen(port, function (req,res) {
  console.log("== Server listening on port", port);
});

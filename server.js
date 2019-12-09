var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get("/", function(req,res){
  res.status(200).render('homePage');
});

app.listen(port, function (req,res) {
  console.log("== Server listening on port", port);
});

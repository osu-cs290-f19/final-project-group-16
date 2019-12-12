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


// app.post('/albums/:album/addAlbum',function(req,res,next){
//   var album = req.params.album.toLowerCase();
//   if (albumData[album]){
//     if(req.body && req.body.url && req.body.name && req.body.artist && req.body.genre){
//       albumData[album].data.push({
//         url: req.body.url,
//         name: req.body.name,
//         artist: req.body.artist,
//         genre: req.body.genre
//       });
//       fs.writeFile(
//         __dirname + '/albumData.json',
//         JSON.stringify(albumData, 2, null),
//         function(err){
//           if(!err){
//             res.status(200).send();
//           } else {
//             res.status(500).send("Failed to write data on server side");
//           }
//         }
//       );
//     } else {
//       res.status(400).send("request body need necesary parts");
//     }
//   } else {
//     next();
//   }
// });


app.get("*", function(req,res){
  res.status(404).render('404Page');
});


app.listen(port, function (req,res) {
  console.log("== Server listening on port", port);
});

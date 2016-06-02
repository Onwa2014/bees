var express = require('express');
  exphbs = require("express-handlebars");
  var app = express();

  app.engine("handlebars", exphbs({defaultLayout : "main"}));
  app.set("view engine", "handlebars"); 
  app.use(express.static(__dirname + "/public"));

   // create a route
   app.get('/', function (req, res) {

      console.log(__dirname);
      // send or sendFile or render
      //when u use render you need to configure a template engine...
      res.sendFile( __dirname + '/index.html');

   });

   app.get('/index.html', function(req,res){
    res.sendFile(__dirname + '/index.html');
   });

   app.get('/blog.html', function(req,res){
    res.sendFile(__dirname + '/blog.html');
   });

   app.get('/about.html', function(req,res){
    res.sendFile(__dirname + '/about.html');
   });

   app.get('/contact.html', function(req,res){
    res.sendFile(__dirname + '/contact.html');
   });

   app.use(express.static('public'));


   //start the server
   var server = app.listen(1100, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Example app listening at http://%s:%s', host, port);

    });
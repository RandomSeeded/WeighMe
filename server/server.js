var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname,'../client')));

var port = 4568;
app.post('/api/weights', function(req, res) {
  console.log('req',req.body);
  res.status(200).send("Functionality to be added later");
});

console.log('Shortly is listening on port');
app.listen(port);


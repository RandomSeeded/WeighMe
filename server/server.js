var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var Weight = require('./weightModel.js');
var User = require('./userModel.js');
var db = require('./db_conf.js');
var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(session({
  secret: 'oogabooga',
  cookie: { maxAge: (60000 * 24 * 30) }
}));
app.use(express.static(path.join(__dirname,'../client')));

var port = 4568;
app.get('/api/weights', function(req, res) {
  console.log(req.sessionID);
  Weight.find({sessionID: req.sessionID}, function(err, result) {
    if (err) { console.log(err); }
    res.status(200).send(result);
  });
});

app.post('/api/weights', function(req, res) {
  console.log(req.body);
  var myWeight = new Weight({weight: req.body.weight, sessionID: req.sessionID}/*{weight: req.body, sessionID: req.sessionID}*/);
  /*User.find({sessionID: req.sessionID}, function(err, result) {
    if (err) { console.log(err); }
    console.log(result);
  });*/
  myWeight.save(function(err) { if (err) { console.log('err', err); } });
  res.status(200).send("Functionality to be added later");
});

console.log('Shortly is listening on port '+port);
app.listen(port);


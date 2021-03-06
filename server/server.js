var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var Weight = require('./weightModel.js');
var User = require('./userModel.js');
var db = require('./db_conf.js');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(session({
  secret: 'oogabooga',
  cookie: { maxAge: (60000 * 24 * 30) }
}));
app.use(express.static(path.join(__dirname,'../client')));

var port = 4568;
app.get('/api/weights', function(req, res) {
  Weight.find({sessionID: req.sessionID}, function(err, result) {
    if (err) { console.log(err); }
    res.status(200).send(result);
  });
});

app.post('/api/weights', function(req, res) {
  var myWeight = new Weight({weight: req.body.weight, sessionID: req.sessionID});
  // Get user data for this weight entry
  User.find({sessionID: req.sessionID}, function(err, result) {
    if (err) { console.log(err); }
  });

  // Add the weight entry to the weights collection
  myWeight.save(function(err) { if (err) { console.log('err', err); } });
  res.status(200).send("Functionality to be added later");
});

app.post('/signin', function(req, res) {
  User.findOne({username: req.body.username}, function(err, result) {
    if (err) { console.log(err); }
    if (!result) {
      console.log('user doesnt exist');
      res.status(401).send("Authentication failed");
    }
    else {
      bcrypt.compare(req.body.password, result.password, function(err, passMatch) {
        if (err) { console.log(err); }
        if (passMatch) { 
          // handle tying records to the appropriate ID here, as well as tying the session to the current user
          res.status(200).send("Authentication successful");
        } else {
          res.status(401).send("Authentication failed");
        }
      });
    }
  });
});

app.post('/signup', function(req, res) {
  // Check if user already exists
  User.find({username: req.body.username}, function(err, results) {
    if (err) { console.log('e',err);
    } else if (results.length !== 0) { 
      res.redirect('/#/signup');
    } else {
      var myUser = new User({username: req.body.username, password: req.body.password, sessionID: req.sessionID});
      myUser.save(function(err) { if (err) { console.log(err) } });
      console.log('redir');
      res.send(201, "Succesful post");
    }
  });
});

console.log('Shortly is listening on port '+port);
app.listen(port);


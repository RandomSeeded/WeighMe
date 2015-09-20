var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static(__dirname+'/client'));

app.post('/api/weights', function(req, res) {
  console.log('req',req.body);
  res.send(200);
});

console.log('Shortly is listening on 4568');
app.listen(4568);


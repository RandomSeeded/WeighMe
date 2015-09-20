var express = require('express');
var app = express();

app.use(express.static(__dirname+'/client'));

app.get('/api/weights', function(req, res) {
  console.log('req body',req.body);
});

console.log('Shortly is listening on 4568');
app.listen(4568);


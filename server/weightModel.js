var mongoose = require('mongoose');

var weightSchema = mongoose.Schema({
  weight: Number,
  userID: String,
  sessionID: String
});

module.exports = mongoose.model('Weight', weightSchema);

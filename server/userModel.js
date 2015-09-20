var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    // required: true
  },
  sessionID: {
    type: String,
    // required: true,
    // unique: true
  }
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) { return next(err); }
    user.password = hash;
    return next();
  });
  return next();
});

module.exports = mongoose.model('User', userSchema);

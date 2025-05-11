const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // hardcoded for now
  role: String, // admin
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  createdAt: Date,
})

module.exports = mongoose.model('User', UserSchema);
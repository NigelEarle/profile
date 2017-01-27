const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
  title: String,
  url: String,
  coverImage: String, 
  description: String,
  createdAt: Date,
  updatedAt: Date,
})

module.exports = mongoose.model('Work', WorkSchema);
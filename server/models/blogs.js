const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  coverImage: String, 
  description: String,
  createdAt: Date,
  updatedAt: Date,
})

module.exports = mongoose.model('Blog', BlogSchema);
const express = require('Express');
const router = express.Router();
const Blog = require('./../models/blogs');

router.route('/blog')
  .get((req, res) => {
    Blog.find()

    // Query DB for all blog posts
  })
  .post((req, res) => {
    const {
      coverImage,
      description,
      createdAt,
      updatedAt,
    } = req.body;

    Blog.create({
      coverImage,
      description,
      createdAt,
      updatedAt,
    }, error => {
      if (!error) {
        res.send('Post successful!');
      }
      res.send(error);
    });
  })
  .put((req, res) => {
    // Update blog to DB
  })
  .delete((req, res) => {
    // Remove blog from DB
  });

module.exports = router;
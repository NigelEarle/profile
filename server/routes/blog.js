const express = require('Express');
const router = express.Router();
const Blog = require('./../models/blogs');

router.route('/blog')
  .get((req, res) => {
    console.log('hello')
    Blog.find((err, blogs) => {
      if(error) {
        res.send(error).status(500);
      } else {
        res.send(blogs)
      }
    })
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
      if (error) {
        res.send(error).status(500);
      } else {
        res.send();
      }
    });
  })
  .put((req, res) => {
    // Update blog to DB
  })
  .delete((req, res) => {
    // Remove blog from DB
  });

module.exports = router;
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
        res.send('Blog post successful!');
      }
    });
  })


router.route('/blog/:id')
  .get((req, res) => {
    Blog.findOne({
      '_id': req.params.id,
    },
    (err, blog) => {
      if (err) {
        res.send(err).status(500);
      } else {
        res.send(blog);
      }
    });
  })
  .put((req, res) => {
    const updatedAt = new Date();
    const {
      coverImage,
      description,
      createdAt,
    } = req.body;

    Blog.findOneAndUpdate({
      '_id': req.params.id,
    },
    {
      coverImage,
      description,
      createdAt,
      updatedAt,
    },
    {
      new: true,
    },
    (err, blog) => {
      if (err) {
        res.send(err).status(500);
      } else {
        res.send(blog)
      }
    });
  })
  .delete((req, res) => {
    Blog.findOneAndRemove({
      '_id': req.params.id,
    }, err => {
      if(err) {
        res.send(err).status(500)
      } else {
        res.send(`Blog id: ${req.params.id} successfully deleted!`);
      }
    });
  });

module.exports = router;
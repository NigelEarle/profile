const express = require('Express');
const router = express.Router();
const Blog = require('./../models/blogs');

const uploadToS3 = require('./../helpers/images');

router.route('/blog')
  .get((req, res) => {
    Blog.find((error, blogs) => {
      if(error) {
        res.send(error).status(500);
      } else {
        res.render('index', {blogs});
      }
    })
  })
  .post((req, res) => {
    const {
      title,
      coverImage,
      description,
    } = req.body;

    const createdAt = new Date();
    const updatedAt = new Date();

    uploadToS3(coverImage, (imageURL) => {
      Blog.create({
        title,
        imageURL,
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
    });
  });

router.get('/blog/new', (req, res) => {
  res.render('new');
});

router.route('/blog/:id')
  .get((req, res) => {
    const {id} = req.params;
    Blog.findOne({
      '_id': req.params.id,
    },
    (err, blog) => {
      if (err) {
        res.send(err).status(500);
      } else {
        res.render('edit', {id, blog});
      }
    });
  })
  .put((req, res) => {
    const updatedAt = new Date();
    const {
      title,
      coverImage,
      description,
      createdAt,
    } = req.body;

    Blog.findOneAndUpdate({
      '_id': req.params.id,
    },
    {
      title,
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
        res.redirect('/api/blog');
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
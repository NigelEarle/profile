const express = require('Express');
const router = express.Router();
const Blog = require('./../models/blogs');
const uploadToS3 = require('./../helpers/images');

router.route('/blog')
  .get((req, res) => {
    Blog.find()
    .then(blogs =>  res.render('index', {blogs}))
    .catch(err => res.send(error).status(500))
  })
  .post((req, res) => {
    const {
      title,
      coverImage,
      description,
    } = req.body;
    const createdAt = new Date();
    const updatedAt = new Date();

    uploadToS3(coverImage)
    .then(coverImage => {
      const payload = {
        title,
        coverImage,
        description,
        createdAt,
        updatedAt,
      }
      Blog.create(payload) 
      .then(() => res.send('Blog post successful!'))
      .catch(err => res.send(error).status(500))
    })
    .catch(err => res.send(err))
  });

router.get('/blog/new', (req, res) => {
  res.render('new');
});

router.route('/blog/:id')
  .get((req, res) => {
    const {id} = req.params;
    Blog.findOne({'_id': id})
    .then(blog => res.render('edit', {id, blog}))
    .catch(err => res.send(err).status(500))
  })
  .put((req, res) => {
    const {id} = req.params;
    const updatedAt = new Date();
    const {
      title,
      coverImage,
      description,
      createdAt,
    } = req.body;

    const payload = {
      title,
      coverImage,
      description,
      createdAt,
      updatedAt
    };

    Blog.findOneAndUpdate(
      {'_id': id},
      payload,
      {new: true}
    )
    .then(blog => res.redirect('/api/blog'))
    .catch(err => res.send(err).status(500))
  })
  .delete((req, res) => {
    const {id} = req.params;
    Blog.findOneAndRemove({'_id': id})
    .then(() => res.send(`Blog id: ${req.params.id} successfully deleted!`))
    .catch(err => res.send(err).status(500))
  });

module.exports = router;
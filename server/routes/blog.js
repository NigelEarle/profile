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
      let payload = {
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
    const expression = new RegExp('https:\/\/personal-profile.s3');

    const {
      title,
      coverImage,
      description,
      createdAt,
    } = req.body;

    let payload = {
      title,
      description,
      coverImage,
      createdAt,
      updatedAt,
    };

    if(coverImage.match(expression)){
      Blog.findOneAndUpdate(
        {'_id': id},
        payload,
        {new: true}
      )
      .then(blog => res.send('I think it worked'))
      .catch(err => res.send(err).status(500))
    } else {
      uploadToS3(coverImage)
      .then(coverImage => {
        payload.coverImage = coverImage;
        Blog.findOneAndUpdate(
          {'_id': id},
          payload,
          {new: true}
        )
        .then(blog => res.send('I think it worked'))
        .catch(err => res.send(err).status(500))
      })
      .catch(err => res.send(err).status(500))
    }

  })
  .delete((req, res) => {
    const {id} = req.params;
    Blog.findOneAndRemove({'_id': id})
    .then(() => res.send(`Blog id: ${req.params.id} successfully deleted!`))
    .catch(err => res.send(err).status(500))
  });

module.exports = router;
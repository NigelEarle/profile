const express = require('express');
const router = express.Router();
const Blog = require('./../models/blogs');
const uploadToS3 = require('./../helpers/images');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/api/login');
}
router.route('/blog')
  .get(isAuthenticated, (req, res) => {
    Blog.find()
    .then(blogs =>  res.render('index', {blogs}))
    .catch(err => res.send(error).status(500))
  })
  .post(isAuthenticated, (req, res) => {
    const {
      title,
      subTitle,
      coverImage,
      description,
    } = req.body;
    const createdAt = new Date();
    const updatedAt = new Date();

    uploadToS3(coverImage)
    .then(coverImage => {
      let payload = {
        title,
        subTitle,
        coverImage,
        description,
        createdAt,
        updatedAt,
      }
      Blog.create(payload) 
      .then(() => res.send('Blog post successful!').status(200))
      .catch(err => res.send(error).status(500))
    })
    .catch(err => res.send(err))
  });

router.get('/blog/json', (req, res) => {
  Blog.find()
  .then(blogs =>  res.json(blogs).status(200))
  .catch(err => res.json({error}).status(500))
})

router.get('/blog/:id/json', (req, res) => {
  const {id} = req.params;
  Blog.findOne({'_id': id})
  .then(blog => res.json(blog).status(200))
  .catch(err => {
    res.json(err).status(500)
  })
})

router.get('/blog/new', isAuthenticated, (req, res) => {
  res.render('new');
});

router.route('/blog/:id')
  .get(isAuthenticated, (req, res) => {
    const {id} = req.params;
    Blog.findOne({'_id': id})
    .then(blog => res.render('edit', {blog}))
    .catch(err => res.send(err).status(500))
  })
  .put(isAuthenticated, (req, res) => {
    const {id} = req.params;
    const updatedAt = new Date();
    const expression = new RegExp('https:\/\/personal-profile.s3');

    const {
      title,
      subTitle,
      coverImage,
      description,
      createdAt,
    } = req.body;

    let payload = {
      title,
      subTitle,
      coverImage,
      description,
      createdAt,
      updatedAt,
    };

    if(coverImage.match(expression)){
      Blog.findOneAndUpdate(
        {'_id': id},
        payload,
        {new: true}
      )
      .then(blog => res.send('Blog update successful!').status(200))
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
        .then(blog => res.send('Blog update successful!').status(200))
        .catch(err => res.send(err).status(500))
      })
      .catch(err => res.send(err).status(500))
    }
  })
  .delete(isAuthenticated, (req, res) => {
    const {id} = req.params;
    Blog.findOneAndRemove({'_id': id})
    .then(() => res.send(`Blog id: ${req.params.id} successfully deleted!`))
    .catch(err => res.send(err).status(500))
  });

module.exports = router;
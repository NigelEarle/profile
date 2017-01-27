const express = require('Express');
const router = express.Router();

router.route('/blog')
  .get((req, res) => {
    // Query DB for all blog posts
  })
  .post((req, res) => {
    // Post blog to DB
  })
  .put((req, res) => {
    // Update blog to DB
  })
  .delete((req, res) => {
    // Remove blog from DB
  });

module.exports = router;
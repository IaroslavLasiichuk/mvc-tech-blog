const router = require('express').Router();
const { Blog } = require('../../models');

// GET all posts from blog
router.get('/', async (req, res) => {
    try {
      const dbBLogData = await Blog.findAll();
      res.render('main', { dbBLogData });
    //  return  res.status(200).json(dbBLogData);
    } catch (err) {
     return  res.status(500).json(err);
    }
  });

module.exports = router;
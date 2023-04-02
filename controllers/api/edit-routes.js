const router = require('express').Router();
const { Blog } = require('../../models');

// GET all posts from blog
router.get('/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
      });
  
      const blogs = blogData.get({ plain: true });
  
      res.render('edit', {
        ...blogs,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
module.exports = router;
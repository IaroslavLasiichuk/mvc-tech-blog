const router = require('express').Router();
const { Blog } = require('../../models');
const { Comment } = require('../../models');

// GET all posts from blog
router.get('/', async (req, res) => {
    try {
      const dbBLogData = await Blog.findAll();
      const blogs = dbBLogData.map((blog) => blog.get({ plain: true }));
      // Serialize data so the template can read it
     return res.render('home', { blogs });
    } catch (err) {
     return  res.status(500).json(err);
    }
});
  

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.post('/', async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       ...req.body,
//     });
//     res.status(200).json(newComment);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;
const router = require('express').Router();
const { Blog } = require('../../models');

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
  
// router.post('/:id', async (req, res) => {
//     try {
//       const dbComment = await Comment.create({
//         comment: req.body.comment,
//       });
//       res.status(200).json(dbComment);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
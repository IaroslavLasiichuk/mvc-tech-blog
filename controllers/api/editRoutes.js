const router = require("express").Router();
const { Blog } = require("../../models");
const { Comment } = require('../../models');
const { User } = require('../../models');
const withAuth = require('../../utilis/auth');


router.get('/:id', async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    const blog = dbBlogData.get({ plain: true });

    res.render('edit', {
      blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get comments
// router.get('/', async (req, res) => {
//   try {
//     const dbCommentData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     }
//     );
//     const comments = dbCommentData.map((comment) => comment.get({ plain: true }));
//     // Serialize data so the template can read it
//       res.render('edit', {
//         comments,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//    return  res.status(500).json(err);
//   }
// });


// router.post('/:id', async (req, res) => {
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
const router = require("express").Router();
const { Blog } = require("../../models");

// GET posts from blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {});

    const blogs = blogData.get({ plain: true });

    res.render("edit", {
      ...blogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
//  Update a category by id
router.put('/:id', async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!blogData[0]) {
      res.status(404).json({ message: 'No blog found with that id!'});
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.post('/:id', async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//       ...req.body,
//     });
//     res.status(200).json(newBlog);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });


module.exports = router;

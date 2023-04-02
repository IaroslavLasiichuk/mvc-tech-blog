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
module.exports = router;

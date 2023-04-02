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
module.exports = router;

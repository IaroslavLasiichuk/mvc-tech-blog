const router = require('express').Router();
const { Blog } = require('../../models');
// Dashboard  route
router.get('/', async (req, res) => {
  try {
  res.render('dashboard');
  } catch (err) {
   return  res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
    });
    console.log(req.body)
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;
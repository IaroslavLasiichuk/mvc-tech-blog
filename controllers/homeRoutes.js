const router = require('express').Router();
const withAuth = require('../utilis/auth');
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbBLogData = await Blog.findAll();
    const blogs = dbBLogData.map((blog) => blog.get({ plain: true }));
    // Serialize data so the template can read it
      res.render('home', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
   return  res.status(500).json(err);
  }
});

//  Use withAuth middleware to prevent access to dashboard page
router.get('/dashboard',withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain: true });
    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
 res.status(500).json(err);
  }
});


// GET sign up page
router.get('/signup', async (req, res) => {
    try {
      res.render('signup');
    } catch (err) {
   res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('log');
});
// router.get('/edit', async (req, res) => {
//   try {
//   res.render('edit');
//   } catch (err) {
//    return  res.status(500).json(err);
//   }
// });

module.exports = router;
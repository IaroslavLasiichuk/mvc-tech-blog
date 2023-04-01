const router = require('express').Router();


// Sign up route
router.get('/', async (req, res) => {
  try {
  res.render('signup');
  } catch (err) {
   return  res.status(500).json(err);
  }
});

module.exports = router;
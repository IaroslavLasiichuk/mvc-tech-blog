const router = require('express').Router();
// Dashboard  route
router.get('/', async (req, res) => {
  try {
  res.render('dashboard');
  } catch (err) {
   return  res.status(500).json(err);
  }
});

module.exports = router;
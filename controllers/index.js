const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/', apiRoutes);

router.use((req, res) => {
    res.render('404')
  });
module.exports = router;
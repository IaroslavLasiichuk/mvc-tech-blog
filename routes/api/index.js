const router = require('express').Router();
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login-routes');

router.use('/home', homeRoutes);
router.use('/login', loginRoutes);

module.exports = router;
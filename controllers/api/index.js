const router = require('express').Router();
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');


router.use('/home', homeRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);


module.exports = router;
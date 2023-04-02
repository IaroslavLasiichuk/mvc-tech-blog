const router = require('express').Router();
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');
const dashboardRoutes = require('./dashboard-routes');
const editRoutes = require('./edit-routes');


router.use('/home', homeRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/edit', editRoutes);


module.exports = router;
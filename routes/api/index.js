const router = require('express').Router();
const homeRoutes = require('./home-routes');


router.use('/home', homeRoutes);


module.exports = router;
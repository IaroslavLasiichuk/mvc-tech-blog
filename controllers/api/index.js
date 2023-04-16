const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const editRoutes = require('./editRoutes');

// Default router for all routes.
router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/edit', editRoutes);

module.exports = router;
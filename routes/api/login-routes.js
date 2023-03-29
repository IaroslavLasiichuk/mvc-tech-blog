const router = require('express').Router();
const { Blog } = require('../../models');

router.get('/', (req, res) => {
    try {
      res.render('log');
      } catch (err) {
       return  res.status(500).json(err);
      }
})
module.exports = router;
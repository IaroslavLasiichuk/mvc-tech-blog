// const router = require('express').Router();
// const { User } = require('../../models');

// // Sign up route
// router.get('/', async (req, res) => {
//   try {
//   res.render('signup');
//   } catch (err) {
//    return  res.status(500).json(err);
//   }
// });

// // CREATE new user
// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     // Set up sessions with a 'loggedIn' variable set to `true`
//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
// module.exports = router;
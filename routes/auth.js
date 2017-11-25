var express = require('express')
var router = express.Router()
var passport = require('passport')

//GET /auth/instagram
router.get('/auth/instagram',
  passport.authenticate('instagram'));

router.get('/auth/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;

'use strict';
var router = require('express').Router;


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/dates', function (req, res) {
  res.send({time: Date.now()});
});


module.exports = router;
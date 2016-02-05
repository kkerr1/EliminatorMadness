'use strict';
/* eslint-disable */
var router = require('express').Router();
/* eslint-enable */

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.set('Access-Control-Allow-Origin', '*');
  console.log('Request: ', req.url);
  next();
});
// define the home page route
router.get('/dates', function (req, res) {

  var dates = [
    {date: '2015-03-17', title: 'Round of 64: Day 1', teams: 2, current: true},
    {date: '2015-03-18', title: 'Round of 64: Day 2', teams: 2},
    {date: '2015-03-19', title: 'Round of 32: Day 1', teams: 1},
    {date: '2015-03-20', title: 'Round of 32: Day 2', teams: 1},
    {date: '2015-03-24', title: 'Sweet 16: Day 1', teams: 1},
    {date: '2015-03-25', title: 'Sweet 16: Day 2', teams: 1},
    {date: '2015-03-26', title: 'Elite 8: Day 1', teams: 1},
    {date: '2015-03-27', title: 'Elite 8: Day 2', teams: 1},
    {date: '2015-04-02', title: 'Final Four', teams: 1},
    {date: '2015-04-04', title: 'Championship', teams: 1}
  ];
  res.send(dates);
});


module.exports = router;

'use strict';

var path = require('path');
var express = require('express');
var config = require('config');

var router = module.exports = express.Router(); // eslint-disable-line new-cap

var buildDir = path.resolve(__dirname, '../../../client/build');
var staticOptions = { maxAge: config.get('server.staticFiles.ttlMilliseconds') };

router.use('/client', express.static(buildDir, staticOptions));

router.get('*', function (req, res) {
  res.sendFile(path.join(path.resolve(__dirname, '../../../client/static'), 'index.html'));
});

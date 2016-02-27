'use strict';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}
var defaultPort = 3000;
var HOST = process.env.HOST || '127.0.0.1';
var PORT = process.env.PORT || defaultPort;

var express = require('express');
var api = require('./routes/api');
var staticRoutes = require('./routes/static');

var app = express();
app.use(staticRoutes);
app.use('/api', api);

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://' + HOST + ':' + PORT);
});

'use strict';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}
var config = require('config');

var HOST = config.get('server.host');
var PORT = config.get('server.port');

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

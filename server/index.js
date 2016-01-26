'use strict';
var express = require('express');
var api = require('./routes/api');
var PORT = 3001;
var app = express();
app.use('/api', api);

app.listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + PORT);
});

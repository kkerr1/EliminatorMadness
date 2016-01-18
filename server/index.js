var path = require('path');
var express = require('express');
var api = require('./routes/api');

var app = express();
app.use('/api', api);

app.listen(3001, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:30001');
});

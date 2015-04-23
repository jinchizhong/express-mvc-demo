var express = require('express');
var env = require('./config/environments');
var db = require('./app/models');

var app = express();

require('./config/app')(app, env);

db.sequelize.sync().then(function () {
  app.listen(app.get('port'));
}).catch(function (e) {
  throw new Error(e);
});


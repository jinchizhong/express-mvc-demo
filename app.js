var express = require('express');
var env = require('./config/environments');

var app = express();

require('./config/app')(app, env);

app.listen(app.get('port'));

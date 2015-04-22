var express = require('express');
var router = express.Router();
var on = require('./lib/on')(router);

on.get('/', 'main#index');

module.exports = router;

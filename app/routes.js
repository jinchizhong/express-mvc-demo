var express = require('express');
var router = express.Router();
var on = require('../lib/on')(router);

on.get('/', 'main#index');
on.post('/add_comment', 'main#add_comment');

module.exports = router;

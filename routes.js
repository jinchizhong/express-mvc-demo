var express = require('express');
var router = express.Router();
var on = require('./lib/on')(router);

on.get('/', 'main#index');
on.post('/add', 'main#add_book');

module.exports = router;

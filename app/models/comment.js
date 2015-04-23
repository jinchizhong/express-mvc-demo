var Sequelize = require('sequelize');
var DB = require('../../lib/db');

var Comment = DB.define('comment', {
  poster: Sequelize.STRING,
  email: Sequelize.STRING,
  content: Sequelize.STRING,
});

Comment.sync();

module.exports = Comment;

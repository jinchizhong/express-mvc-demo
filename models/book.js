var Sequelize = require('sequelize');
var DB = require('../lib/db');

var Book = DB.define('book', {
  name: Sequelize.STRING,
  public_date: Sequelize.DATE,
});

Book.sync();

module.exports = Book;

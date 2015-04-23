module.exports = function (db, Sequelize) {
  var Comment = db.define('Comment', {
    poster: Sequelize.STRING,
    email: Sequelize.STRING,
    content: Sequelize.STRING,
  });

  return Comment;
}

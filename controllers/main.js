Comment = require('../models/comment');

exports.index = function(req, res, err) {
  Comment.findAll().then(function(comments) {
    console.log(comments);
    res.render("index", { title: 'Hi guest.', comments: comments });
  });
};

exports.add_comment = function(req, res, err) {
  Comment.sync().then(function() {
    return Comment.create({
      poster: req.body.poster,
      email: req.body.email,
      content: req.body.content,
    });
  }).then(function(){
    res.redirect(302, '/');
  });
};

Book = require('../models/book');

exports.index = function(req, res, err) {
  res.render("index", { title: 'Express' });
};

exports.add_book = function(req, res, err) {
  Book.sync().then(function() {
    Book.create({
      name: req.body.name,
      public_date: new Date(),
    });
  });
  res.send(req.body);
};

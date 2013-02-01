var Order = require('../models/order');
var Ingredient = require('../models/ingredient');

exports.list = function(req, res){
  var query = Order.find({});
  query.sort("-cost");
  query.exec(function (err, docs) {
    if (err)
      return console.log("error", err);
    res.render('order', {orders: docs, title: 'List of orders'});
  });
};

exports.new = function (req, res) {
  var ingquery = Ingredient.find({});
  ingquery.sort("-cost");
  ingquery.exec(function (err, docs) {
    if (err)
      return console.log("error", err);
    res.render('order_new', {ingredients: docs, title: 'New order'});
  });
};

exports.create = function (req, res) {
  res.send(req.body.coffee)
};
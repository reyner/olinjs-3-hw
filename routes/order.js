var Order = require('../models/order');
var Ingredient = require('../models/ingredient');

exports.list = function(req, res){
  Order.find({}).populate('ingredients').exec(function (err, orders) {
    if (err) return handleError(err);
    res.render('order_list', {orders: orders, title: 'List of orders'});
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
  console.log(req.body);
  var new_order = new Order({ customer: req.body.name, ingredients: req.body.ingredient });
  new_order.save(function (err) {
    if (err) return console.log("error", err);
  res.redirect('/orders');
  });
};

exports.destroy = function(req, res){
  var query = Order.findOneAndRemove({ _id:req.body.oid });
  query.exec(function (err, docs){
    if (err)
      return console.log("error", err);
    res.send("Deleted");
  });
};

exports.delete_all = function(req, res){
  Order.remove({}, function(err) { 
    console.log('collection removed') 
  });
  res.send("deleted");
};
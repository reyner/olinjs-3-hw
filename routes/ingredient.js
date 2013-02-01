var Ingredient = require('../models/ingredient');


exports.list = function(req, res){
  var query = Ingredient.find({});
  query.sort("-cost");
  query.exec(function (err, docs) {
    if (err)
      return console.log("error", err);
    res.render('ingredient_list', {ingredients: docs, title: 'List of ingredients'});
  });
};


exports.new = function (req, res) {
  res.render('ingredient_new', {
    title: 'New ingredient'
  });
};

exports.create = function (req, res) {
  var new_ing = new Ingredient({ name: req.body.name, cost: req.body.cost });
  new_ing.save(function (err) {
    if (err) return console.log("error", err);
	res.redirect('/ingredients');
  });
};

exports.delete_all = function(req, res){
  Ingredient.remove({}, function(err) { 
    console.log('collection removed') 
  });
  res.send("deleted");
};
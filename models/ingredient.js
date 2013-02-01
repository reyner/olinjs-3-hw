var mongoose = require('mongoose');

var schema = mongoose.Schema({
	name: String,
	cost: Number
});
var Ingredient = mongoose.model('Ingredient', schema);

module.exports = Ingredient;
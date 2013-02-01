var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var schema = mongoose.Schema({
	name: String,
	cost: Number
});
var Ingredient = mongoose.model('Ingredient', schema);

module.exports = Ingredient;
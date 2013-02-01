var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var schema = mongoose.Schema({
	ingredients: [String],
	customer: String
});
var Order = mongoose.model('Order', schema);

module.exports = Order;
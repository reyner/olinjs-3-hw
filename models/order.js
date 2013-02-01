var mongoose = require('mongoose');

var schema = mongoose.Schema({
  ingredients : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  customer: String
});
var Order = mongoose.model('Order', schema);

module.exports = Order;

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , ingredient = require('./routes/ingredient')
  , order = require('./routes/order')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', order.list);
app.get('/ingredient/new', ingredient.new);
app.post('/ingredient/create', ingredient.create);
app.get('/ingredients', ingredient.list);
app.get('/ingredient/delete/all', ingredient.delete_all)
app.get('/order/new', order.new);
app.post('/order/create', order.list);
app.get('/orders', order.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

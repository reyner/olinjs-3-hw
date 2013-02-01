
/*
 * GET home page.
 */

exports.home = function(req, res){
  res.render('index', { title: "Reyner's Jessica's Burgers" });
};
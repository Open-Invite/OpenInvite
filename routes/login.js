var data = require('../data.json');

/*
 * GET login page.
 */
exports.view = function(req, res){
  res.render('login', data);
}

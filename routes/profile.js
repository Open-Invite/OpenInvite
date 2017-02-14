var data = require('../data.json');

/*
 * GET profile page.
 */
exports.view = function(req, res){
  res.render('profile', data);
}

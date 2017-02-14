var data = require('../data.json');

/*
 * GET help page.
 */
exports.view = function(req, res){
  res.render('help', data);
}

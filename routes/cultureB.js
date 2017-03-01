var data = require('../data.json');

/*
 * GET culture page.
 */
exports.view = function(req, res){
  res.render('cultureB', data);
}

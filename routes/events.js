var data = require('../data.json');

/*
 * GET events page.
 */
exports.view = function(req, res){
  res.render('events', {});
}

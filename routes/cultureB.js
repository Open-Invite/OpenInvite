var data = require('../data.json');

/*
 * GET culture page.
 */
exports.view = function(req, res){
  var newData = JSON.parse(JSON.stringify(data));
  res.render('cultureB', newData);
}

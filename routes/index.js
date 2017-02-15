var data = require('../data.json');
var dataHelper = require("../helpers/data");

/*
 * GET home page.
 */
exports.view = function(req, res){
  var newData = JSON.parse(JSON.stringify(data));
  newData.events = dataHelper.filterEventsByOtherUsers(newData.events, newData.profile);
  res.render('index', newData);
}

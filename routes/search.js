var data = require('../data.json');
var dataHelper = require("../helpers/data");

/*
 * POST search query
 */
exports.view = function(req, res){
  var newData = JSON.parse(JSON.stringify(data));
  newData.events = dataHelper.filterEventsByOtherUsers(
    newData.events, newData.profile);
  newData.events = dataHelper.filterEventsByLocation(
    newData.events, 0.008, 32.8885448, -117.24166079999999);
  console.log(req.body.search)
  newData.events = dataHelper.filterEventsBySearchQuery(
    newData.events, req.body.search);

  res.render('index', newData);
}

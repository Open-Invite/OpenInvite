var data = require('../data.json');
var dataHelper = require("../helpers/data");

/*
 * GET home page.
 */
exports.view = function(req, res){
  var newData = JSON.parse(JSON.stringify(data));
  newData.events = dataHelper.filterEventsByOtherUsers(
    newData.events, newData.profile);
  newData.events = dataHelper.filterEventsByLocation(
    newData.events, 0.008, 32.8885448, -117.24166079999999);
  newData.events = dataHelper.sortEventsByTime(
    newData.events
  );

  console.log(newData.events);

  for (var i = 0; i < newData.events.length; i++) {
    for (var j = 0; j < newData.events[i].going.length; j++){
      if(newData.events[i].going[j].id == 7){
        newData.events[i].attending = true;
      }
    }
  }

  res.render('index', newData);
}

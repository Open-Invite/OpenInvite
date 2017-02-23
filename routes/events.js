var data = require('../data.json');
var dataHelper = require("../helpers/data");

/*
 * GET events page.
 */
exports.view = function(req, res){

  var newData = JSON.parse(JSON.stringify(data));
  newData.events = dataHelper.sortEventsByTime(
    newData.events
  )

  var userData = {
    "events": [],
    "profile": newData.profile
  };
  for(var i = 0; i < newData.events.length; i++) {
    if(newData.events[i].host.id == 7){
      userData.events.push(newData.events[i])
    } else {
      for(var j = 0; j < newData.events[i].going.length; j++) {
        if(newData.events[i].going[j].id == 7){
          userData.events.push(newData.events[i])
        }
      }
    }
  }
  res.render('events', userData);
}

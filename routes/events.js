var data = require('../data.json');

/*
 * GET events page.
 */
exports.view = function(req, res){
  var userData = {
    "events": [],
    "profile": data.profile
  };
  for(var i = 0; i < data.events.length; i++) {
    if(data.events[i].host.id == 7){
      userData.events.push(data.events[i])
    } else {
      for(var j = 0; j < data.events[i].going.length; j++) {
        if(data.events[i].going[j].id == 7){
          userData.events.push(data.events[i])
        }
      }
    }
  }
  res.render('events', userData);
}

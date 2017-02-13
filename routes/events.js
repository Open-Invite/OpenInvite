var data = require('../data.json');

/*
 * GET events page.
 */
exports.view = function(req, res){
  var userData = {"events": []};
  for(var i = 0; i < data.events.length; i++){

    // Only use Skyler's events (assume logged in user is Skyler)
    if(data.events[i].host.id === 7){
      userData.events.push(data.events[i])
    }
  }
  res.render('events', userData);
}

var data = require('../data.json');
var dataHelper = require("../helpers/data");

/*
 * POST newevent data, redirect to home page.
 */
exports.view = function(req, res){

  var postData = {
    "name": req.body.name,
    "host": {
      "id": data.profile.id,
      "name": data.profile.name
    },
    "location": req.body.location,
    "latitude": 0,
    "longitude": 0,
    "date": req.body.date,
    "time": req.body.time,
    "going": [],
    "cancelled": [],
    "tags": []
  };
  // Save post data to database
  dataHelper.createEvent(postData);

  res.redirect('/events');
}
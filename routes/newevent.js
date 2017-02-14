/*
 * POST newevent data, redirect to home page.
 */
exports.view = function(req, res){
  var dataHelper = require("../helpers/data");

  var postData = {
    "name": "GURU Meeting",
    "host": {
      "id": 6,
      "name":"Gary Cottrell"
    },
    "location": "CSE 4140",
    "latitude": 0,
    "longitude": 0,
    "date": "13 Feb",
    "time": "4:00pm",
    "going": [],
    "cancelled": [],
    "tags": []
  };
  // Save post data to database
  dataHelper.createEvent(postData);

  res.redirect('/');
}

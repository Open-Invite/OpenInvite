var data = require('../data.json');
var dataHelper = require("../helpers/data");


/*
 * POST attend event (which really means toggle attenance)
 */
exports.view = function(req, res){
  /*
  var postData = {
    "id": data.profile.id,
    "name": req.body.name,
    "location": req.body.location,
    "username": req.body.username,
    "email": req.body.email,
    "password": req.body.password,
    "latitude": 0,
    "longitude": 0,
    "events": [],
    "profilePicture": data.profile.profilePicture
  };
  // Save post data to database
  dataHelper.editProfile(postData);
  */

  dataHelper.attendEvent(req.body.user, req.body.event);

  res.send(200)
}

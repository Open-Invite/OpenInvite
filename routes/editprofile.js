var data = require('../data.json');
var dataHelper = require("../helpers/data");


/*
 * POST editprofile data, redirect to profile page.
 */
exports.view = function(req, res){

  var postData = {
    "id": data.profile.id,
    "name": data.profile.name,
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

  res.redirect('/profile');
}

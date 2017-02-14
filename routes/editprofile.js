/*
 * POST editprofile data, redirect to profile page.
 */
exports.view = function(req, res){
  var dataHelper = require("../helpers/data");

  var postData = {
    "id": 7,
    "name": "Skyler \"Caffeine\" Taylor",
    "email": "coffee@ucsd.edu",
    "password": "1234",
    "latitude": 1,
    "longitude": 2,
    "events": [],
    "profilePicture": "http://lorempixel.com/50/50/people/"
  };
  // Save post data to database
  dataHelper.editProfile(postData);

  res.redirect('/profile');
}

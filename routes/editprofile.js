/*
 * POST editprofile data, redirect to profile page.
 */
exports.view = function(req, res){

  // Save post data to database

  res.redirect('/profile');
}

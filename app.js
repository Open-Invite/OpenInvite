/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars')

var login = require('./routes/login');
var index = require('./routes/index');
var profile = require('./routes/profile');
var events = require('./routes/events');
var culture = require('./routes/culture');
var cultureB = require('./routes/cultureB');
var help = require('./routes/help');
var newEvent = require('./routes/newevent');
var editProfile = require('./routes/editprofile');
var createProfile = require('./routes/createprofile');
var attendEvent = require('./routes/attendevent');
var search = require('./routes/search');
var dance = require('./routes/dance');
var festivals = require('./routes/festivals');
var history = require('./routes/history');
var museums = require('./routes/museums');
var music = require('./routes/music');
var theatre = require('./routes/theatre');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/index', index.view);
app.get('/profile', profile.view);
app.get('/events', events.view);
app.get('/culture', cultureB.view);
app.get('/cultureB', culture.view);
app.get('/help', help.view);
app.get('/dance', dance.view);
app.get('/festivals', festivals.view);
app.get('/history', history.view);
app.get('/museums', museums.view);
app.get('/music', music.view);
app.get('/theatre', theatre.view);

app.post('/new_event', newEvent.view);
app.post('/edit_profile', editProfile.view);
app.post('/create_profile', createProfile.view);
app.post('/attend_event', attendEvent.view);
app.post('/search', search.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

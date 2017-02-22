var data = require("../data.json");

module.exports = {

  /*
   * Excludes the current user's events, returns event list
   */
  filterEventsByOtherUsers: function(events, currentUser) {
    var newEventsList = [];
    for(var i = 0; i < events.length; i++){
      if(currentUser.id != events[i].host.id) {
        newEventsList.push(events[i]);
      }
    }

    return newEventsList;
  },

  /*
   * Excludes events outside of radius, returns event list
   */
  filterEventsByLocation: function(events, radius, lat, lon) {
    // TODO use a real radius function instead of searching in a square
    var newEventsList = [];
    for(var i = 0; i < events.length; i++){
      if((Math.abs(events[i].latitude - lat) <= radius)
      && (Math.abs(events[i].longitude - lon) <= radius)) {
        newEventsList.push(events[i]);
      }
    }

    return newEventsList;
  },

  /*
   * Include events starting with the string in search, returns event list
   */
  filterEventsBySearchQuery: function(events, search) {
    var newEventsList = [];
    for(var i = 0; i < events.length; i++){
      if(events[i].name.toLowerCase().includes(search.toLowerCase())) {
        newEventsList.push(events[i]);
      } else if (events[i].host.name.toLowerCase().includes(search.toLowerCase())) {
        newEventsList.push(events[i]);
      } else if (events[i].date.toLowerCase().includes(search.toLowerCase())) {
        newEventsList.push(events[i]);
      } else if (events[i].time.toLowerCase().includes(search.toLowerCase())) {
        newEventsList.push(events[i]);
      } else if (events[i].location.toLowerCase().includes(search.toLowerCase())) {
        newEventsList.push(events[i]);
      } else if (events[i].description.toLowerCase().includes(search.toLowerCase())) {
        newEventsList.push(events[i]);
      }
    }
    console.log(newEventsList)
    return newEventsList
  },

  /*
   * Sort events by how soon they are, returns event list
   */
  sortEventsByTime: function(events) {

  },

  /*
   * Returns user with corresponding id
   */
  getUserById: function(id) {
    for(var j = 0; j < data.users.length; j++){
      if(id == data.users[j].id) {
        return data.users[j];
      }
    }
    return {};
  },

  /*
   * Returns event with corresponding id
   */
  getEventById: function(id) {
    for(var j = 0; j < data.events.length; j++){
      if(id == data.events[j].id) {
        return data.events[j];
      }
    }
    return {};
  },

  /*
   * Adds a new event to data.json and adds event to user's event list
   */
  createEvent: function(newOiEvent) {
    // Iteratively use the 'next' id
    newOiEvent.id = 1 + data.events[data.events.length-1].id
    data.events.push(newOiEvent);
    module.exports.getUserById(newOiEvent.host.id).events.push(newOiEvent.id);
    return;
  },

  /*
   * Adds a user to an event in data.json
   */
  attendEvent: function(oiUserID, oiEventID) {
    // Check if user is attending, if so, remove attenance
    // Else add user to attendees
    oiuser = module.exports.getUserById(oiUserID);
    oievent = module.exports.getEventById(oiEventID);

    attendee = {
      'name': oiuser.name,
      'id': oiuser.id
    };

    // Check if in cancelled
    for (var i = 0; i < oievent.cancelled.length; i++){
      if(oievent.cancelled[i].id == attendee.id){
        oievent.cancelled.splice(i, 1);
        oievent.going.push(attendee);
        return;
      }
    }

    // Check if in going
    for (var i = 0; i < oievent.going.length; i++){
      if(oievent.going[i].id == attendee.id){
        oievent.going.splice(i, 1);
        oievent.cancelled.push(attendee);
        return;
      }
    }

    // Made it this far... Must not be in either list
    oievent.going.push(attendee);
    return;
  },

  /*
   * Gets a list of events within radius of lat and lon
   * WARNING: Not necessarily in order
   */
  getEvents: function(lat, lon, radius) {
    return [];
  },

  /*
   * Adds a new user to data.json
   */
  createProfile: function(newOiUser) {
    return;
  },

  /*
   * Modifies a user in data.json
   * updates everything except event list
   */
  editProfile: function(oiUser) {
    var existingOiUser = module.exports.getUserById(oiUser.id);
    existingOiUser.name = oiUser.name;
    existingOiUser.email = oiUser.email;
    existingOiUser.username = oiUser.username;
    existingOiUser.location = oiUser.location;
    existingOiUser.password = oiUser.password;
    existingOiUser.latitude = oiUser.latitude;
    existingOiUser.longitude = oiUser.longitude;
    existingOiUser.profilePicture = oiUser.profilePicture;

    data.profile = existingOiUser;
    return;
  }
}

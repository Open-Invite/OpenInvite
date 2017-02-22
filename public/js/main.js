function toggleNav(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
}

$("#menu-toggle").click(toggleNav);

$('.attend-button').click(function() {

  var ctx = this;
  var eventNum = 0;

  $.post('/attend_event',
    {
      'user': 7,
      'event': $(ctx).siblings('data').attr('value')
    },
    function(data, status){
    $(ctx).toggleClass("active");

    //$(ctx).css('width', $(this).outerWidth());

    $(ctx).text(function(i, text){
      return text.trim() === "Cancel" ? "I'm going" : "Cancel";
    });
  });
});

$(document).ready(function() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
})

var lat;
var lon;

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  console.log(lat + ", " + lon);
}

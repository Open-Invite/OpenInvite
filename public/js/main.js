$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$('.attend-button').click(function() {
  $(this).toggleClass("active");

  $(this).css('width', $(this).outerWidth());

  $(this).text(function(i, text){
    return text === "Cancel" ? "I'm going" : "Cancel";
  })
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

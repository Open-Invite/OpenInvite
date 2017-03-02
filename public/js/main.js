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

$('#newEvent').submit(function(event) {
  console.log(event);
  console.log("prevented default");
  console.log($("#newEvent :input").serializeArray());
  data = $("#newEvent :input").serializeArray();

  // If date is old
  if(Date.parse(data[2].value) <= Date.now() || data[2].value == ""){
    event.preventDefault();
    // Show message to use future date
  }

  // Contiue submision
});

$('.newEventCulture').click(function(e){
  var eventInfo = $(this).closest('.well-sm').find('.event-item-right');
  var title = eventInfo.find('.event-item-title').text();
  var location = eventInfo.find('.event-item-subtitle').text();
  var description = eventInfo.find('.card-text').text();
  var popup = $('.popup-container');
  popup.find('.popupTitle').val(title);
  popup.find('.popupLocation').val(location);
  popup.find('.popupDescription').val(description);
})

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

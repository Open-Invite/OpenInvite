// Get the modal
var modal = document.getElementById('eventPopUp');
// Get the modal
var modalL = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	else if(event.target == modalL) {
        modalL.style.display = "none";
    }
}


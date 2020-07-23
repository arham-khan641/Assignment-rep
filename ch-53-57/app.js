var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var m = document.getElementById("myM");

// Get the button that opens the modal
var b = document.getElementById("myB");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];


// When the user clicks the button, open the modal 
b.onclick = function() {
  m.style.display = "block";
}

  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  m.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == m) {
    m.style.display = "none";
  }
}

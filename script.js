// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the "active" class to the navbar when you reach its scroll position. Remove "active" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

// When the user scrolls the page, execute scrollFunction
window.onscroll = function() {
  scrollFunction();
};

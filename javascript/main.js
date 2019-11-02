// Write a toggle function for a child of the selected element!!!

// ----- constants -----
const buttons = document.getElementsByClassName("buttons");
const button = document.getElementById("my-button");

// ----- event listeners ------

button.addEventListener("click", toggleButton);

//----- functions -----

// an arrow function with ES6
function init() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", toggleButton);
  }
}

function toggleButton(event) {
  if (event.target.parentNode.children[1].style.display === "none") {
    event.target.parentNode.children[1].style.display = "";
  } else {
    event.target.parentNode.children[1].style.display = "none";
  }
}

init();

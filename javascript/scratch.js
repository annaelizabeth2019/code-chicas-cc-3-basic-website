// cached element references (constants)
const button = document.getElementById("my-button");
console.log(button);

// event listeners
document.addEventListener("click", toggleButton);

// functions
function toggleButton(event) {
  if (event.target.parentNode.children[1].style.display === "none") {
    event.target.parentNode.children[1].style.display = "";
  } else {
    event.target.parentNode.children[1].style.display = "none";
  }
}

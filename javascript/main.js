// Write a toggle function for a child of the selected element!!!
function toggleButton(event) {
  const text = event.target.parentNode.children[1];
  console.log(event.target.parentNode.children[1].style.display);

  if (text.style.display === "none") {
    console.log("true");
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

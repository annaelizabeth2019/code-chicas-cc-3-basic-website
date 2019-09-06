// Write a toggle function for a child of the selected element!!!
const scope = "Higher scope";
function toggleButton(event) {
  const text = event.target.parentNode.children[1];

  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

button = document.getElementById("myEvent");
button.onclick = event => {
  console.log("onclick");
};
button.onclick = event => {
  console.log("onclick 2");
};

button.addEventListener("click", event => {
  console.log("addEventListener", event);
});
button.addEventListener("click", event => {
  console.log("addEventListener 2");
});

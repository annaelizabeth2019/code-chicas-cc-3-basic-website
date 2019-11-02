/*---- constants ----*/

/*---- app's state (variables) ----*/
let board;
let turn = "X";

/*---- cached element references ----*/
const squares = Array.from(document.querySelectorAll("#board div"));

/*---- event listeners ----*/
document.getElementById("board").addEventListener("click", handleTurn);

/*---- functions ----*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  render();
}

function render() {
  board.forEach(function(value, index) {
    squares[index].textContent = value;
  });
}

function handleTurn(event) {
  //Some logic for changing turns
  let idx = squares.findIndex(function(square) {
    return square === event.target;
  });
  board[idx] = turn;
  render();
}

init();

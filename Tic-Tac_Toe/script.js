let container = document.getElementsByClassName("container");
let game = document.getElementsByClassName("game");
let boxex = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn")
let resetBtn = document.querySelector("#reset-btn")

let turnO = true;
let count = 0
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxex.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    count++

    let isWinner = checkWinner();
    if(count ===9 && !isWinner){
      gameDraw()
    }
  });
});

function reset(){
  turnO = true

  count = 0
  enabledBoxex()
  msgContainer.classList.add("hide");
}

function enabledBoxex(){
  for(let box of boxex){
   
    box.disabled = false
    box.innerText = ""
  }
}
function disabledBoxex(){
  for(let box of boxex){
    box.disabled = true
  }
}

function gameDraw() {
  msg.innerHTML = 'Game was Draw';
  msgContainer.classList.remove("hide");
disabledBoxex()

}


function showWinner(winner) {
  msg.innerHTML = `Congratulation, Winner is ${winner}`;

  msgContainer.classList.remove("hide");
disabledBoxex()

}

function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1 = boxex[pattern[0]].innerText;
    let pos2 = boxex[pattern[1]].innerText;
    let pos3 = boxex[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        // return true;/////////
      }
    }
  }
}

newBtn.addEventListener("click", reset)
resetBtn.addEventListener("click",reset)
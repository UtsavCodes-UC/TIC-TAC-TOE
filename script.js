let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let resetDiv = document.querySelector(".menu");
let resetbtn = document.querySelector(".reset")

let Xturn = true;
let hasWon = false;
let count = 0;

resetDiv.style.visibility = 'hidden';
result.style.visibility = 'hidden';

const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        resetDiv.style.visibility = 'visible';
        if (box.innerText == "" && !hasWon) {
            if (Xturn) {
                box.style.color = "red";
                box.innerText = "X";
            }
            else {
                box.style.color = "black";
                box.innerText = "O";
            }
            Xturn = !Xturn;
            count++;
        }

        winPattern.forEach((winPos) => {
            if (boxes[winPos[0]].innerText == boxes[winPos[1]].innerText && boxes[winPos[1]].innerText == boxes[winPos[2]].innerText && boxes[winPos[0]].innerText != "") {
                result.innerText = "CONGRATULATIONS, " + boxes[winPos[0]].innerText + " HAS WON!";
                result.style.visibility = 'visible';
                resetbtn.innerText = "NEW GAME";
                hasWon = true;
            }
        })

        if (count == 9 && !hasWon) {
            result.innerText = "DRAW!";
            result.style.visibility = 'visible';
            resetbtn.innerText = "NEW GAME";
            hasWon = true;
        }
    })
})

let resetEverything = () => {
    boxes.forEach((box) => {
        box.innerText = "";;
    })
    result.innerText = "";
    hasWon = false;
    resetbtn.innerText = "RESET GAME";
    resetDiv.style.visibility = 'hidden';
    result.style.visibility = 'hidden';
    count=0;
    Xturn = true;
}

resetbtn.addEventListener("click", resetEverything);


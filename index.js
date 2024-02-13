const squareAll = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
function randomSquare() {
  squareAll.forEach((square) => square.classList.remove("mole"));

  let randomSquare = squareAll[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

squareAll.forEach((square) => {
  square.addEventListener("mousemove", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Kazanamadın');
    }
}
let countDownTimerId = setInterval(countDown , 1000);
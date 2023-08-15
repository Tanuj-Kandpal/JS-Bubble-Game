let hitRandomnumber;

function bubbbleMaker() {
  var clutter = "";
  for (var i = 0; i <= 140; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector(".bubbles").innerHTML = clutter;
}

bubbbleMaker();

let timerValue = 60;
function Timer() {
  let timerOutput = setInterval(function () {
    if (timerValue > 0) {
      timerValue--;
      document.querySelector("#timerValue").innerHTML = timerValue;
    } else {
      document.querySelector(
        ".container"
      ).innerHTML = `<div style = "display: flex;
      align-items: center; justify-content: center;">Game Over</div>`;
      clearInterval(timerOutput);
    }
  }, 1000);
}
Timer();

function hit() {
  hitRandomnumber = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = `${hitRandomnumber}`;
}
hit();

let score = 0;
function increaseScore() {
  score += 10;
  document.querySelector(".score").innerHTML = score;
}

document.querySelector(".bubbles").addEventListener("click", function (dets) {
  let valueReturn = dets.target.textContent;
  if (valueReturn == hitRandomnumber) {
    increaseScore();
    hit();
    bubbbleMaker();
  }
});

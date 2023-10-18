"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
  document.querySelector(".score").textContent = Score;
let highScore = 0;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".input").value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number Input";
  } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 correct guess";
      document.querySelector('body').style.backgroundColor = "darkgreen";
      document.querySelector(".questionmark").textContent = secretNumber;
      if (Score > highScore)
      {
          highScore = Score;
          document.querySelector('.highscore').textContent = highScore;
          }
  } else if (guess > secretNumber) {
    if (Score > 1) {
      document.querySelector(".message").textContent = "📈 Too high";
      Score--;
      document.querySelector(".score").textContent = Score;
    } else {
        document.querySelector(".message").textContent = "😔 You lost the game";
        document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
 if (Score > 1) {
      document.querySelector(".message").textContent = "📉 Too low";
      Score--;
      document.querySelector(".score").textContent = Score;
    } else {
        document.querySelector(".message").textContent = "😔 You lost the game";
        document.querySelector(".score").textContent = 0;
    }
    }
       document.querySelector(".input").value = "";
});

document.querySelector('.again').addEventListener("click", () => {
   secretNumber = Math.trunc(Math.random() * 20) + 1
    Score = 20;
    document.querySelector(".score").textContent = Score;
    document.querySelector(".input").value = "";
    document.querySelector('body').style.backgroundColor = "rgb(39, 34, 34)";
    document.querySelector(".message").textContent = "Start Guessing....";
    document.querySelector(".questionmark").textContent = '?';
});

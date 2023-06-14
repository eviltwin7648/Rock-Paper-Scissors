function pickUserHand(hand) {
  console.log(hand);
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  let results = document.querySelector(".result");
  results.style.display = "flex";

  if (hand == "rock") {
    document.getElementById("userpickimg").src = "./assets/rock.png";
  } else if (hand == "paper") {
    document.getElementById("userpickimg").src = "./assets/Paper.png";
  } else {
    document.getElementById("userpickimg").src = "./assets/Scissors.png";
  }

  let cpHand = pickComputerhand();
  refree(hand, cpHand);
}
function pickComputerhand() {
  let hands = ["rock", "paper", "scissors"];
  var cpHand = hands[Math.floor(Math.random() * 3)];
  console.log(cpHand);
  document.getElementById("computerpickimg").src = "./assets/" + cpHand + ".png";
  return cpHand;
}
let score = 0;
function refree(hand, cpHand) {
  if (hand === "rock" && cpHand === "scissors") {
    document.getElementById("decision").textContent = "YOU WIN";
    score =  score+1;
  } else if (hand === "rock" && cpHand === "paper") {
    document.getElementById("decision").textContent = "YOU LOSE";
  } else if (hand === "rock" && cpHand === "rock") {
    document.getElementById("decision").textContent = "it's a tie!";
  } else if (hand === "paper" && cpHand === "scissors") {
    document.getElementById("decision").textContent = "YOU LOSE";
  } else if (hand === "paper" && cpHand === "paper") {
    document.getElementById("decision").textContent = "it's a tie!";
  } else if (hand === "paper" && cpHand === "rock") {
    document.getElementById("decision").textContent = "YOU WIN";
    score =  score+1;
  } else if (hand === "scissors" && cpHand === "scissors") {
    document.getElementById("decision").textContent = "it's a tie!";
  } else if (hand === "scissors" && cpHand === "paper") {
    document.getElementById("decision").textContent = "YOU WIN";
    score =  score+1;
  } else if (hand === "scissors" && cpHand === "rock") {
    document.getElementById("decision").textContent = "YOU LOSE";
  }
  document.querySelector(".score h1").textContent = score;
}
function restartGame(){
    let hands = document.querySelector(".hands");
    hands.style.display = "grid";
    let results = document.querySelector(".result");
    results.style.display = "none";
}

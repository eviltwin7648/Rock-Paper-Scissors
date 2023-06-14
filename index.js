function pickUserHand(hand) {
  console.log(hand);
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  let results = document.querySelector(".result");
  results.style.display = "flex";

  if (hand == "Rock") {
    document.getElementById("userpickimg").src = "./assets/Rock.png";
  } else if (hand == "Paper") {
    document.getElementById("userpickimg").src = "./assets/Paper.png";
  } else {
    document.getElementById("userpickimg").src = "./assets/Scissors.png";
  }

  let cpHand = pickComputerhand();
  refree(hand, cpHand);
}
function pickComputerhand() {
  let hands = ["Rock", "Paper", "Scissors"];
  var cpHand = hands[Math.floor(Math.random() * 3)];
  console.log(cpHand);
  document.getElementById("computerpickimg").src = "./assets/" + cpHand + ".png";
  return cpHand;
}
let score = 0;
function refree(hand, cpHand) {
  if (hand === "Rock" && cpHand === "Scissors") {
    document.getElementById("decision").textContent = "YOU WIN";
    score =  score+1;
  } else if (hand === "Rock" && cpHand === "Paper") {
    document.getElementById("decision").textContent = "YOU LOSE";
  } else if (hand === "Rock" && cpHand === "Rock") {
    document.getElementById("decision").textContent = "it's a tie!";
  } else if (hand === "Paper" && cpHand === "Scissors") {
    document.getElementById("decision").textContent = "YOU LOSE";
  } else if (hand === "Paper" && cpHand === "Paper") {
    document.getElementById("decision").textContent = "it's a tie!";
  } else if (hand === "Paper" && cpHand === "Rock") {
    document.getElementById("decision").textContent = "YOU WIN";
    score =  score+1;
  } else if (hand === "Scissors" && cpHand === "Scissors") {
    document.getElementById("decision").textContent = "it's a tie!";
  } else if (hand === "Scissors" && cpHand === "Paper") {
    document.getElementById("decision").textContent = "YOU WIN";
    score =  score+1;
  } else if (hand === "Scissors" && cpHand === "Rock") {
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

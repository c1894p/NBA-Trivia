const questions = [
  {
    question: "What year was the NBA created?",
    choices: [1936, 1946, 1957, 1972],
    answer: 1946,
  },
  {
    question: "Which NBA franchise has won the most NBA titles?",
    choices: [
      "Boston Celtics",
      "New York Knicks",
      "Los Angelas Lakers",
      "Chicago Bulls",
    ],
    answer: "Los Angelas Lakers",
  },
  {
    question: "Who has scored the most points ever in a NBA game?",
    choices: [
      "Kobe Bryant",
      "Michael Jordan",
      "Devin Booker",
      "Wilt Chamberlin",
    ],
    answer: "Wilt Chamberlin",
  },
  {
    question:
      "Who is the first player to drafted #1 with out playing college or highschool basketball in the NBA?",
    choices: [
      "Luka Doncic",
      "Yao Ming",
      "Dikembe Mutombo",
      "Giannis Antetokounmpo",
    ],
    answer: "Yao Ming",
  },
  {
    question: "Which team drafted Kobe Bryant in 1996?",
    choices: [
      "Charlotte Hornets",
      "Los Angelas Lakers",
      "Chicago Bulls",
      "New York Knicks",
    ],
    answer: "Charlotte Hornets",
  },
  {
    question: "Which team has won the most consecutive NBA titles?",
    choices: [
      "Detroit Pistons",
      "Boston Celtics",
      "Los Angelas Lakers",
      "Chicago Bulls",
    ],
    answer: "Boston Celtics",
  },
  {
    question: "Which player has won the most NBA dunk contests?",
    choices: [
      "Dominique Wilkins",
      "Aaron Gordon",
      "Michael Jordan",
      "Nate Robinson",
    ],
    answer: "Nate Robinson",
  },
  {
    question: "Which player has the record for most 3-pointers in a game?",
    choices: ["Steph Curry", "Ray Allen", "Klay Thompson", "Reggie Miller"],
    answer: "Klay Thompson",
  },
  {
    question: "Who was the youngest player to score 10,000 points in the NBA?",
    choices: [
      "Kobe Bryant",
      "Lebron James",
      "Michael Jordan",
      "Wilt Chamberlin",
    ],
    answer: "Lebron James",
  },
  {
    question:
      "Which team owns the record for the longest winning streak in NBA history?",
    choices: [
      "Chicago Bulls",
      "Golden State Warriors",
      "Los Angelas Lakers",
      "Miami Heat",
    ],
    answer: "Golden State Warriors",
  },
];

//Selectors
const h2 = document.querySelector("#triviaQ");
const choiceA = document.querySelector(".A");
const choiceB = document.querySelector(".B");
const choiceC = document.querySelector(".C");
const choiceD = document.querySelector(".D");
const choiceBtns = document.querySelectorAll(".choice");
const choiceContainer = document.querySelector('.choiceContainer')
const nextQBtn = document.querySelector("#nextQ");
const score = document.querySelector("span");

//event listners
window.addEventListener("load", setQuestion);
nextQBtn.addEventListener("click", setQuestion);
for (let btn of choiceBtns) {
  btn.addEventListener("click", rightAnswer);
}

//function to set questions
let q = 0;
function setQuestion() {
  h2.innerText = questions[q].question;
  choiceA.innerText = questions[q].choices[0];
  choiceB.innerText = questions[q].choices[1];
  choiceC.innerText = questions[q].choices[2];
  choiceD.innerText = questions[q].choices[3];

  q++;

  if(q === 10){
    nextQBtn.style.display = "none";
  };

  clearAnswer();
//   results();
}

//function to check for right asnwer and add/minus from score
function rightAnswer(e) {
  let btn = e.target;
  let numScore = parseInt(score.innerText);
  if (btn.innerHTML.toString() === questions[q - 1].answer.toString()) {
    btn.style.background = "green";
    numScore += 10;
    score.innerText = numScore;
  } else {
    btn.style.background = "red";
    numScore -= 5;
    score.innerText = numScore;
  }
}

//function to clear choice background colors
function clearAnswer() {
  for (let btn of choiceBtns) {
    btn.style.background = "aliceblue";
  }
}

//function to show final results
// function results (e) {
  
// }
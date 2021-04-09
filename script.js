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
const choiceContainer = document.querySelector(".choiceContainer");
const nextQBtn = document.querySelector("#nextQ");
const score = document.querySelector("span");
const swish = document.querySelector('#swish');
const buzzer = document.querySelector('#buzzer');



//event listners
window.addEventListener("load", setQuestion);
nextQBtn.addEventListener("click", setQuestion);
for (let btn of choiceBtns) {
  btn.addEventListener("click", rightAnswer);
}

//global varables
let q = 0;
let btnCLicked = true;

//function to set questions
function setQuestion() {
  h2.innerText = questions[q].question;
  choiceA.innerText = questions[q].choices[0];
  choiceB.innerText = questions[q].choices[1];
  choiceC.innerText = questions[q].choices[2];
  choiceD.innerText = questions[q].choices[3];

  q++;

  setBG();
  clearAnswer();
  results();
};


//function to get choices button audio (Patricio assistance)
function playSound (el) {
    let audio = el.cloneNode();
    audio.play();
 }

//function to check for right asnwer and add/minus from score
function rightAnswer(e) {
  let btn = e.target;
  let numScore = parseInt(score.innerText);
  if (btnCLicked === true) {
    if (btn.innerHTML.toString() === questions[q - 1].answer.toString()) {
      btn.style.background = "rgb(98, 228, 105)";
      numScore += 10;
      score.innerText = numScore;
      playSound(swish);
      btnCLicked = false;
    } else {
        if(btn.style.background === "rgb(252, 63, 63)"){
          numScore = numScore;
          score.innerText = numScore;
      } else {
        btn.style.background = "rgb(252, 63, 63)";
        numScore -= 5;
        score.innerText = numScore;
        playSound(buzzer);
      }
    }
  }
};

//function to clear choice background colors
function clearAnswer() {
  for (let btn of choiceBtns) {
    btn.style.background = "aliceblue";
    if (btnCLicked === false) {
      btnCLicked = true;
    }
  }
}

//function to show final results
const resultsBtn = document.createElement('button');
const nextDiv = document.querySelector('.next')

function results (e) {
  if (q === 10) {
    nextQBtn.style.display = "none";
    resultsBtn.innerText = 'Final Score'
    resultsBtn.setAttribute('class', 'resultsBtn');
    nextDiv.append(resultsBtn);
  }
}

//function to create final score 
function finalScore () {
  h2.innerHTML = "FINAL SCORE";
  h2.style.fontSize = "80px";
  choiceContainer.style.display = "none";
  const total = document.createElement('h3');
  total.innerText = score.innerText;
  total.setAttribute('class', 'total')
  h2.appendChild(total);
  resultsBtn.style.display = "none"
};

//Event listener to show final score
resultsBtn.addEventListener('click', finalScore)

function setBG () {
  document.body.style.backgroundImage = "url('venice.jpg')"
  document.body.setAttribute('class','questionBG');
}
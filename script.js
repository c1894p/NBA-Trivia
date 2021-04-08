const questions = [
    {
        question: "What year was the NBA created?",
        choices:[1936,1946,1957,1972],
        answer: 1946
    },
    {
        question: "Which NBA franchise has won the most NBA titles?",
        choices:['Boston Celtics', 'New York Knicks', 'Los Angelas Lakers', 'Chicago Bulls'],
        answer:'Los Angelas Lakers'
    },
    {
        question: "Who has scored the most points ever in a NBA game?",
        choices:['Kobe Bryant', 'Michael Jordan', 'Devin Booker', 'Wilt Chamberlin'],
        answer:'Los Angelas Lakers'
    },
]

//Selectors
const h2 = document.querySelector('#triviaQ');
const choiceA = document.querySelector('.A');
const choiceB = document.querySelector('.B');
const choiceC = document.querySelector('.C');
const choiceD = document.querySelector('.D');
const nextQBtn = document.querySelector('#nextQ');

//function to set first question
function setQuestion () {
    h2.innerText = questions[0].question
    choiceA.innerText = questions[0].choices[0]
    choiceB.innerText = questions[0].choices[1]
    choiceC.innerText = questions[0].choices[2]
    choiceD.innerText = questions[0].choices[3]
}

//function to set next question
function question2 () {
    h2.innerText = questions[1].question
    choiceA.innerText = questions[1].choices[0]
    choiceB.innerText = questions[1].choices[1]
    choiceC.innerText = questions[1].choices[2]
    choiceD.innerText = questions[1].choices[3]
}



//event listner
window.addEventListener('load', setQuestion);
nextQBtn.addEventListener('click', question2);



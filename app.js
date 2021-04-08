const ruleBtn = document.querySelector('#ruleBtn');
const ruleDiv = document.querySelector('#rules');
const closeBtn = document.querySelector('#closeBtn');

ruleBtn.addEventListener('click', () => {
    ruleDiv.style.display ="block";
})

closeBtn.addEventListener('click', () => {
    ruleDiv.style.display ="none";
})
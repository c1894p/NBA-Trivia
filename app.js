const ruleBtn = document.querySelector('#ruleBtn');
const ruleDiv = document.querySelector('#rules');
const closeBtn = document.querySelector('#closeBtn');

ruleBtn.addEventListener('click', () => {
    ruleDiv.style.display ="block";
    ruleBtn.style.display ="none"
})

closeBtn.addEventListener('click', () => {
    ruleDiv.style.display ="none";
    ruleBtn.style.display ="block"
})
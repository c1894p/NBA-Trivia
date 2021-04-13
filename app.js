//Selecors
const ruleBtn = document.querySelector("#ruleBtn");
const ruleDiv = document.querySelector("#rules");
const closeBtn = document.querySelector("#closeBtn");
const bulls = document.querySelector("#bulls");


//Gme info event listeners
ruleBtn.addEventListener("click", () => {
  ruleDiv.style.display = "block";
  ruleBtn.style.display = "none";
  bulls.play();
});

closeBtn.addEventListener("click", () => {
  ruleDiv.style.display = "none";
  ruleBtn.style.display = "block";
});



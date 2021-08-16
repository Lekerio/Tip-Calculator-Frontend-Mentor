let tipPercentage = document.getElementsByClassName("tipPercentage");
let activeClassName = "active";
let bill = document.getElementById("bill");

function activeState(items, activeName) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains(activeName)) {
      items[i].classList.remove(activeName);
    }
  }
}

for (let i = 0; i < tipPercentage.length; i++) {
  tipPercentage[i].addEventListener("click", function (e) {
    activeState(tipPercentage, activeClassName);
    e.target.classList.add(activeClassName);
  });
}

function calculateTipPercentage() {
  function retrieveTipPercentage() {
    for (let i = 0; i < tipPercentage.length; i++) {
      if (tipPercentage[i].classList.contains("active")) {
        return tipPercentage[i].value;
      }
    }
  }
  let chosenTip = retrieveTipPercentage();
  let result2 = document.getElementById("result2");

  result2.innerText = (chosenTip / 100) * bill.value;
}

for (let i = 0; i < tipPercentage.length; i++) {
  tipPercentage[i].addEventListener("click", calculateTipPercentage);
}

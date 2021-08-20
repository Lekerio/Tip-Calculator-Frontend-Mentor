let tipPercentage = document.getElementsByClassName("tipPercentage");
let activeClassName = "active";
let bill = document.getElementById("bill");
let numberpeople = document.getElementById("numberpeople");


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
        if (tipPercentage[i].value == 0) {
            
        }
        return tipPercentage[i].value;
      }
    }
  }
  let chosenTip = retrieveTipPercentage();
  let result1 = document.getElementById("result1");
  let result2 = document.getElementById("result2");
  let finalTip = (chosenTip / 100) * bill.value;

  if (numberpeople.value <= 0 || bill.value <= 0) {
    return;
  } else {

    result2.innerText = finalTip.toFixed(2);
    result1.innerText = (finalTip / numberpeople.value).toFixed(2);
  }
}

for (let i = 0; i < tipPercentage.length; i++) {
  tipPercentage[i].addEventListener("click", calculateTipPercentage);
}

bill.addEventListener("input", calculateTipPercentage)
numberpeople.addEventListener("input", calculateTipPercentage)

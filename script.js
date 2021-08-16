let tipPercentage = document.getElementsByClassName("tipPercentage");
let activeClassName = "active";

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

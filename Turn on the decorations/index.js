const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const extraDec = document.querySelector(".extra-decorations")
const star = document.getElementById("glowing-star")
const candle = document.getElementById("candle")
const deer = document.getElementById("deer")
const body = document.querySelector("body")
decorator.addEventListener("click", deckTheHalls)

function deckTheHalls() {
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
  if (decorator.checked){
    house.textContent = "☃️ 🎄 🎁 🏡 🔔 ❄️ 🧦"
    extraDec.style.display = "flex"
    body.style.backgroundImage = "url(tree.gif)"
  } else {
    house.textContent = "🏡"
    extraDec.style.display = "none"
    body.style.removeProperty("background-image")
  } 
  
} 

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
star.addEventListener('click', function(){
  house.textContent += "🌟"
})

candle.addEventListener('click', function(){
  house.textContent += "🕯️"
})

deer.addEventListener("click", function(){
  house.textContent += "🦌"
})
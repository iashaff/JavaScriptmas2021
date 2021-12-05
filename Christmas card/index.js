const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const card = document.getElementById("card")
const bodyColor = document.querySelector('body')
const colorBtn = document.getElementById('colorBtn')
btn.addEventListener("click", writeGreeting)
colorBtn.addEventListener("click", changeColor)


const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

const backgroundImage = [
    "img/annie-spratt.jpg",
    "img/davies-designs.jpg",
    "img/davies-designs2.jpg",
    "img/markus-spiske.jpg",
    "img/sharon-mccutcheon.jpg",
]

// Task:
// Write a function to display a random greeting in the card.

function writeGreeting() {
    let text = greetings [Math.floor(Math.random() * greetings.length)]
    let image = backgroundImage [Math.floor(Math.random() * backgroundImage.length)]
    greetingDisplay.textContent = text
    card.style.backgroundImage = `url(${image})`
} 

function changeColor(){
  bodyColor.style.backgroundColor = randomColor()  
}

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.
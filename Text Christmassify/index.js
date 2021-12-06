const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
const music = document.getElementById("music")
const body = document.querySelector("body")
const container = document.querySelector(".container")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
  greeting.classList.toggle('christmassified')
  
  if (christmassifierBtn.innerText === "Christmassify"){
    christmassifierBtn.innerText = "De-christmassify"
    music.play()
    body.style.backgroundImage = "url('annie-spratt.jpg')"
    container.style.opacity = '0.7'
  } else if (christmassifierBtn.innerText === "De-christmassify"){
    christmassifierBtn.innerText = "Christmassify"
    body.style.removeProperty("background-image")
    container.style.removeProperty("opacity")
    music.pause()
  }
}


setTimeout(function(){
  greeting.classList.remove('christmassified')
  christmassifierBtn.innerText = "Christmassify"
  body.style.removeProperty("background-image")
  container.style.removeProperty("opacity")
  music.pause()
}, 20000)

  
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to //-"De-christmassify", if not, change text to "Christmassify"


// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.


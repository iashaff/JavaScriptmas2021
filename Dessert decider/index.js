const btn = document.getElementById("btn")
let foodUrl = "https://foodish-api.herokuapp.com/api/images/dessert"
const desertDisplay = document.getElementById("foodHolder")
const next = document.getElementById("next")
const previous = document.getElementById('previous')
let foodArr = []
let imgNum = 0

btn.addEventListener("click", findYum)

 async function findYum() {
     imgNum ++
     let response = await fetch(foodUrl)
       if (response.ok){
           let desert = await response.json()
           desertDisplay.innerHTML = `<img src="${desert.image}" alt="desert image">`
           foodArr.push(desert.image)
        } else desertDisplay.innerHTML = `Error HTTP: ${response.status}`;
      if (imgNum > 1){
        previous.style.display = "block"
    }
}





previous.addEventListener("click", function(){
    imgNum--
    desertDisplay.innerHTML = `<img src="${foodArr[imgNum - 1]}" alt="desert image">`
    if (imgNum === 1) {
        previous.style.display = "none"
    }
})


/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/


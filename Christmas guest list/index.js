const input = document.getElementById("input")
const btn = document.getElementById("btn")
const listItem = document.getElementsByTagName('li')
let guestList = document.getElementById("guest-list")
let guests = ["Me", "Cat","Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]
// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.


  function renderList(){
        guestList.innerHTML = ""
        
     for (let i = 0; i < guests.length; i++){
        guestList.innerHTML += `<li data-id="${i}">${guests[i]}</li>`
      } 
      guestList.querySelectorAll('li').forEach(guest => {
      guest.addEventListener("click", removeGuests)
})
 }

 renderList()


function addGuests(){
    if(input.value === ''){
        input.placeholder = "Enter a name"
    } else {
      input.placeholder = ""
      guests.push(input.value)
      input.value = '' 
      renderList()
    }
}
btn.addEventListener('click', addGuests)
// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


function removeGuests(){
     guests.splice(event.target.dataset.id, 1)
     renderList()
}
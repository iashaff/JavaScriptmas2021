const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const toysBtn = document.getElementById("toys")



christmasBtn.addEventListener('click', function(){
    body.classList.remove("snow")
    body.classList.remove("toys")
    body.classList.add("christmas")
    greeting.classList.add('christmas')
})

snowBtn.addEventListener('click', function(){
    body.classList.remove('christmas')
    greeting.classList.remove('christmas')
    body.classList.remove("toys")
    body.classList.add('snow')
})

toysBtn.addEventListener('click', function(){
    body.classList.remove('cristmas')
    body.classList.remove('snow')
    greeting.classList.remove('christmas')
    body.classList.add('toys')
})


const greeting = document.getElementById("greeting")
const container = document.querySelector(".container")
const btn = document.getElementById("btn")
const body = document.querySelector('body')
const title = document.querySelector('.title')

function fix() {
  greeting.style.display = "none"
  btn.style.display = "none"
  title.textContent = "Merry christmas!!!"
  title.style.color = "#3330e3"
  title.classList.add('christmas')
  container.style.backgroundImage = "url('./img/lights.gif')"
  body.style.backgroundColor = "#f589dd"
}

btn.addEventListener('click', fix)










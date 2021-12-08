const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const volume = document.getElementById("volume-control")
const bell = document.getElementById('bell')
const tree = document.getElementById("tree")
let audio = new Audio(`bells.mp3`)

playBtn.addEventListener('click', function(){
    audio.play()
    bell.classList.add('animate')
    tree.classList.add("animate-tree")
    tree.style.animationPlayState = "running"
    bell.style.animationPlayState = "running"
})

pauseBtn.addEventListener('click', function(){
    audio.pause()
    bell.style.animationPlayState = "paused"
    tree.style.animationPlayState = "paused"
})

stopBtn.addEventListener('click', function(){
    audio.pause()
    audio.currentTime = 0
    bell.classList.remove('animate')
    tree.classList.remove('animate-tree')
})

volume.addEventListener("change", function(e){
    audio.volume = e.currentTarget.value / 100
})


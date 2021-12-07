const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const volume = document.getElementById("volume-control")
let audio = new Audio(`bells.mp3`)
// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
playBtn.addEventListener('click', function(){
    audio.play()
})

pauseBtn.addEventListener('click', function(){
    audio.pause()
})

stopBtn.addEventListener('click', function(){
    audio.pause()
    audio.currentTime = 0
})

volume.addEventListener("change", function(e){
    audio.volume = e.currentTarget.value / 100
})
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.

const countdownDisplay = document.getElementById("countdown-display");
const container = document.querySelector('.container')
const merryChristmas = document.querySelector('body');
const header = document.querySelector("h1");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");



function renderCountdown(){
   
    let endDate = new Date('Dec 25, 2021 00:00:00').getTime();
    let nowDate = new Date().getTime();
    let deadline = endDate - nowDate;
    let oneSecond = 1000;
    let oneMinute = oneSecond * 60;
    let oneHour = oneMinute * 60;
    let oneDay = oneHour * 24;
    
    if (deadline > 0){
        let days = Math.floor(deadline / oneDay);
        let hours = Math.floor((deadline % oneDay) / oneHour);
        let minutes = Math.floor((deadline % oneHour) / oneMinute);
        let seconds = Math.floor((deadline % oneMinute) / oneSecond);
        countdownDisplay.innerText = `${days} days`;
        hoursDisplay.innerText = `${hours} h`;
        minutesDisplay.innerText = `${minutes} min`;
        secondsDisplay.innerText = `${seconds} sec`;
    } 
    else if (deadline < 0 || deadline === 0){
        clearInterval(timer)
       container.style.display = "none"
       header.style.display = "none"
       merryChristmas.classList.add('merry-christmas')
    }
}
let timer = setInterval(renderCountdown, 1000);

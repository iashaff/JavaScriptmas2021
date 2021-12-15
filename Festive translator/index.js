const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
const christmas = document.getElementById("christmas")
const holiday = document.getElementById("holiday")
languageSelector.addEventListener("change", translate)
holiday.addEventListener("change", translate)


const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!",
        greetingNY: "Happy New Year!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!",
        greetingNY: "Feliz año nuevo!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!",
        greetingNY: "З Новим Роком!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!",
        greetingNY: "Blwyddyn Newydd Dda!"
    },
    {
        language: "Russian",
        greeting: "Счастливого Рождества!",
        greetingNY: "Счастливого Нового года!"
    }
]

function translate(){
    
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
    if (christmas.checked){
        for (let i = 0; i < greetingsArr.length; i++){
           if (languageSelector.value === greetingsArr[i].language) {
            greetingDisplay.textContent = greetingsArr[i].greeting
        } greetingDisplay.style.animation = "pulse 2s"
         setTimeout(()=> greetingDisplay.style.removeProperty("animation"),2000)
        } 
        
    } else for (let j = 0; j < greetingsArr.length; j++){
        if (languageSelector.value === greetingsArr[j].language){
            greetingDisplay.textContent = greetingsArr[j].greetingNY
        }
        greetingDisplay.style.animation = "pulse 2s"
        setTimeout(()=> greetingDisplay.style.removeProperty("animation"),2000)
    }
        
    }
    


// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".

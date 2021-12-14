const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const tools = document.getElementById("tool")
const title = document.querySelector("h1")


btn.addEventListener("click", duplicateElf)
tools.addEventListener('click', addTool)

function duplicateElf(){
     if (elf.textContent.length < 100){
         elf.textContent += "🧝".repeat(2)
     } else title.textContent = "Party is ready 🎉"
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
function addTool(){
    if (elf.textContent.length < 100){
        elf.textContent += "🍕 🍷 🍟 🍰 ☕"
    } else title.textContent = "Party is ready 🎉"
}
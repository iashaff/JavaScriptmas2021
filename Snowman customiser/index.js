 const inputs = document.querySelectorAll(".controls input");
 let root = document.documentElement
// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.
function updateColor(inputName, currentColor) {
  root.style.setProperty('--' + inputName, currentColor)
}

inputs.forEach(input => {
  input.addEventListener("change", function (event) {
    updateColor(event.target.name, event.target.value)
  })
})
// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
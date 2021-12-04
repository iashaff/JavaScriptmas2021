const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const deleteBtn = document.getElementById("delete")
const addBtn = document.getElementById("add")
const input = document.querySelector("input")

function renderList (){
    let itemsList = ''
    for (let i = 0; i < items.length; i++){
     itemsList += `<div class="checklist-item">
                            <input type="checkbox"> 
                            <label class="strikethrough">${items[i]}</label>
                            </div>`
                            }  
    checklist.innerHTML = itemsList
}
 renderList();

addBtn.addEventListener('click', function(){
    if (input.value){
       items.push(input.value); 
       input.value = ""
       renderList()
    } 
})

deleteBtn.addEventListener('click', function(){
    let checkedItem = document.querySelectorAll("input[type=checkbox]:checked");
    for (let checked of checkedItem){
        let index = items.indexOf(checked.value)
        items.splice(checked, 1);
    }
    renderList()
})


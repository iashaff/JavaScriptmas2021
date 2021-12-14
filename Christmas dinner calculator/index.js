const btn = document.getElementById("btn")
const guests = document.getElementById("num-input");
const veg = document.getElementById("vegetarian-input")
const body = document.querySelector('body')
let food = document.getElementById("food")
btn.addEventListener('click', christmasDinner)
let menu = [
    {
        name: "Roasted pear and blue cheese soufflé",
        services: 2,
        vegetarian: true,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/roasted-pear-and-blue-cheese-souffle/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/886477-1-eng-GB_baked-cheese-souffle-2-768x960.jpg"
    },

    {
        name: "Roast onion squash stuffed with blue cheese risotto",
        services: 2,
        vegetarian: false,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/roast-onion-squash-stuffed-with-blue-cheese-risotto/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/442487-1-eng-GB_squash-risotto-768x1069.jpg"
    },
    {
        name: "Confit duck with lentils",
        services: 4,
        vegetarian: false,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/confit-duck-with-lentils/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/08/confit-duck-leg-768x960.jpg"
    },
    {
        name: "Beetroot pithiviers",
        services: 4,
        vegetarian: true,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/beetroot-pithiviers/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/905870-1-eng-GB_beetroot-pithiviers-768x960.jpg"
    },
    {
        name: "Roast beef sirloin with spiced celeriac gratin",
        services: 6,
        vegetarian: false,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/roast-beef-sirloin-with-spiced-celeriac-gratin/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/765136-1-eng-GB_roast-beef-sirloin-768x960.jpg"
    },
    {
        name: "Sweet potato, ciabatta and chestnut stuffing",
        services: 6,
        vegetarian: true,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/sweet-potato-ciabatta-chestnut-stuffing/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/12/sweet-potato-ciabatta-and-chestnut-stuffing-768x962.jpg"
    },
    {
        name: "One-pan roast turkey cushion with trimmings",
        services: 8,
        vegetarian: false,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/one-pan-roast-turkey-cushion-with-trimmings/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/12/Christmas-main-768.jpg"
    },
    {
        name: "Roast sprouts with walnuts and pomegranates",
        services: 8,
        vegetarian: true,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/roast-sprouts-walnuts-pomegranates/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/12/DELICIOUS_DEC19_Xmas_45020_Sides_ColeslawSproutsRoastiesParsnipsCarrots-2-768x962.jpg"
    },
    {
        name: "Mustard and tarragon sausage rolls",
        services: 9,
        vegetarian: false,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/mustard-and-tarragon-sausage-rolls/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/726475-1-eng-GB_sausage-rolls-768x960.jpg"
    },
    {
        name: "Middle Eastern-spiced nut roast with three-potato topping",
        services: 9,
        vegetarian: true,
        recipe: "https://www.deliciousmagazine.co.uk/recipes/spiced-nut-roast-three-potato-topping/",
        img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/12/nut-roast-768x960.jpg"
    }
    
]

function christmasDinner(){
    for (let i = 0; i < menu.length; i++){
        if (guests.value <= 2 && menu[i].services === 2 && menu[i].vegetarian === veg.checked){
            food.innerHTML = `<a href="${menu[i].recipe}" target="_blank">${menu[i].name}</a>`
            body.style.backgroundImage = `url(${menu[i].img})`
        } else if (guests.value > 2 && guests.value <= 4 && menu[i].services === 4 && menu[i].vegetarian === veg.checked){
           food.innerHTML = `<a href="${menu[i].recipe}" target="_blank">${menu[i].name}</a>`
           body.style.backgroundImage = `url(${menu[i].img})`
        } else if (guests.value > 4 && guests.value <= 6 && menu[i].services === 6 && menu[i].vegetarian === veg.checked){
           food.innerHTML = `<a href="${menu[i].recipe}" target="_blank">${menu[i].name}</a>`
           body.style.backgroundImage = `url(${menu[i].img})`
        } else if (guests.value > 6 && guests.value <= 8 && menu[i].services === 8 && menu[i].vegetarian === veg.checked){
           food.innerHTML = `<a href="${menu[i].recipe}" target="_blank">${menu[i].name}</a>`
           body.style.backgroundImage = `url(${menu[i].img})`
        } else if (guests.value >= 9 && menu[i].services === 9 && menu[i].vegetarian === veg.checked) {
            food.innerHTML = `<a href="${menu[i].recipe}" target="_blank">${menu[i].name}</a>`
            body.style.backgroundImage = `url(${menu[i].img})`
        }
       
    }
    
}

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.


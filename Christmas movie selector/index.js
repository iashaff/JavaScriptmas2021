const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")
const display = document.querySelector(".movie-display")
const suggestedMovie = document.getElementById("suggested-movie")



const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action",
        img: "img/dieHard.jpg"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance",
        img: "img/loveActually.jpg"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action",
        img: "img/polarExpress.jpg"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance",
        img: "img/shrek.jpg"
    },
    {
        name: "Knives out",
        age: "PG",
        genre: "Mistery",
        img: "img/knivesOut.jpg"
    },
    {
        name: "The Woman in the Window",
        age: "18+",
        genre: "Mistery",
        img: "img/womanWindow.jpg"
    },
    {
        name: "Dune",
        age: "PG",
        genre: "Scince fiction",
        img: "img/dune.jpg"
    },
    {
        name: "Blade Runner 2049",
        age: "18+",
        genre: "Scince fiction",
        img: "img/bladeRunner.jpg"
    }

]




let showMovie = () => {
    let age = ageSelector.value
    let genre = genreSelector.value

    const movie = moviesArr.find(el => el.age === age && el.genre === genre)

    display.style.backgroundImage = `url(${movie.img})`
    suggestedMovie.style.display = "none"

}

genreSelector.addEventListener('change', showMovie)
ageSelector.addEventListener('change', showMovie)

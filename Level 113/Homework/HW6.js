let movies = [
    { title: "Avatar", rating: 8.5, year: 2009, watched: true },
    { title: "Titanic", rating: 7.9, year: 1997, watched: true },
    { title: "Joker", rating: 8.4, year: 2019, watched: false },
    { title: "Inception", rating: 9.0, year: 2010, watched: true },
    { title: "Venom", rating: 6.5, year: 2021, watched: false },
    { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
]

let filter = movies.filter(item => item.rating > 8)
let map = movies.map(item => `${item.title} - ${item.rating}`)
let findIndex = movies.findIndex(item => item.title === "Interstellar")
let some = movies.some(item => item.watched === false)
let every = movies.every(item => item.rating > 6)

movies.forEach(i => {
    console.log(`${i.title} --> ${i.year}`)  
    console.log(filter)
    console.log(map)
    console.log(findIndex)
    console.log(some)
    console.log(every)

})
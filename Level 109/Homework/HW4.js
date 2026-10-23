let movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    duration: 169,
    language: "English"
}

console.log(movie.title)
console.log(movie.director)
console.log(movie.year)

movie.year = 9.0
movie.duration = 170
movie.genre = "Science Fiction"
movie.country = "USA"
movie.availableOnPlatform = true
delete movie.language
delete movie.year
movie.releaseYear = 2014

console.log(movie)
let athletes = [
    { name: "Nika", sport: "Swimming", age: 21, medals: 5, score: 92 },
    { name: "Mariam", sport: "Tennis", age: 19, medals: 3, score: 85 },
    { name: "Giorgi", sport: "Swimming", age: 24, medals: 7, score: 88 },
    { name: "Ana", sport: "Running", age: 17, medals: 2, score: 95 },
    { name: "Luka", sport: "Tennis", age: 22, medals: 6, score: 78 },
    { name: "Elene", sport: "Swimming", age: 20, medals: 4, score: 96 },
    { name: "Saba", sport: "Running", age: 25, medals: 8, score: 82 },
    { name: "Data", sport: "Tennis", age: 23, medals: 5, score: 91 }
]

let filter = athletes.filter(item => item.sport === "Swimming" && item.medals >= 4)
let grade = "NOTHNIG"
let medal = "nothing"
let sum = 0

athletes.forEach(i => {
    console.log(`INFORMATION name - ${i.name} age - ${i.age} medals count - ${i.medals} score - ${i.score}`)

    grade = i.score >= 90 ? "Excellent" : i.score > 80 ? "Good" : "Needs improvement"

    
    if (i.medals > 5) {
        medal = "WOW VERY GOOD MA FRIENDO"
    } else {
        medal = "i think u can do better..."
    }

    sum += i.score
})

console.log(filter.length)
console.log(sum)
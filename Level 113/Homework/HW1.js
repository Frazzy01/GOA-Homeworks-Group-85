let students = [
    { name: "Nika", age: 17, score: 85, active: true },
    { name: "Ana", age: 19, score: 45, active: false },
    { name: "Giorgi", age: 21, score: 92, active: true },
    { name: "Mariam", age: 18, score: 67, active: true },
    { name: "Luka", age: 16, score: 38, active: false },
    { name: "Saba", age: 20, score: 74, active: true }
]

let filter = students.filter(item => item.active === true)
let map = students.map(item => item.score < 50 ? `${item.name} Failed` : `${item.name} Passed`)
let index = students.findIndex(item => item.name === "Mariam")
let some = students.some(item => item.score > 90)
let every = students.every(item => item.age >= 16)

students.forEach(i => {
    console.log(`${i.name} --> ${i.score}`)
    console.log(filter)
    console.log(map)
    console.log(index)
    console.log(some)
    console.log(every)

})
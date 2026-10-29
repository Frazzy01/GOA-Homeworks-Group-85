let students = [
    { name: "Nika", age: 17, score: 92, attendance: 95 },
    { name: "Mariam", age: 19, score: 68, attendance: 80 },
    { name: "Giorgi", age: 18, score: 85, attendance: 90 },
    { name: "Ana", age: 16, score: 45, attendance: 60 },
    { name: "Luka", age: 20, score: 78, attendance: 88 },
    { name: "Saba", age: 17, score: 96, attendance: 98 },
    { name: "Elene", age: 19, score: 55, attendance: 75 },
    { name: "Data", age: 18, score: 89, attendance: 92 }
]


let goodstudents = students.filter(item => item.score > 80 && item. attendance >= 90)
let goodstudentscount = goodstudents.length

goodstudents.forEach(item => {
    console.log(item.name)
    console.log(item.age)
    console.log(item.score)
    console.log(item.attendance)

    console.log(item.name, "-", item.age, item.score, item.attendance)
})


console.log(goodstudentscount)
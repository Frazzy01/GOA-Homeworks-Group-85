let students = [
    { name: "Nika", score: 95, attendance: 92 },
    { name: "Mariam", score: 65, attendance: 85 },
    { name: "Giorgi", score: 82, attendance: 70 },
    { name: "Ana", score: 45, attendance: 95 },
    { name: "Luka", score: 90, attendance: 88 },
    { name: "Elene", score: 75, attendance: 96 }
]

let filter = students.filter(item => item.score > 70)
let grade = NaN


filter.forEach(i => {
    console.log(i.name, "-->", i.score)

    let grade = i.score > 90 ? "Excellent" : "Passed"
    let attendances = i.attendance > 90 ? "Good attendance" : "Low attendance"

    console.log(i.name, "-", "Score:", i.score, "-", grade, "-", attendances)
})
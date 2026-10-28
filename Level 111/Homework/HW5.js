
let student = {
    math: 85,
    english: 92,
    physics: 67,
    chemistry: 78,
    history: 55,
    biology: 90
}

let keyo = {}
let valueso = {}

let key = Object.keys(student)
let values = Object.values(student)

let keycount = 0
let sum = 0

let max = 0
let maxname = ""


for (let i in student) {
    keyo[i] = i
    valueso[i] = student[i]

    if (typeof i == "string") {
        keycount++
    }

    if (student[i] > 80) {
        console.log(i, student[i])
    }

    if (max < student[i]) {
        max = student[i]
        maxname = i
    }

    sum += student[i]
}

console.log(sum)
console.log(maxname, "-->", max)
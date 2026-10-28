let exam = {
    Nika: 95,
    Ana: 68,
    Giorgi: 82,
    Mariam: 45,
    Luka: 73,
    Saba: 30,
    Elene: 88
}

let passedcount = 0
let nopassedcount = 0
let max = 0
let maxname = ""
let sum = 0
let keycount = 0

for (let i in exam) {
    console.log(i, "-->", exam[i])

    if (exam[i] > 70) {
        console.log(i, "passed")
        passedcount++
    } else {
        console.log(i, "No passed")
        nopassedcount++
    }

    if (max < exam[i]) {
        max = exam[i]
        maxname = i
    }

    sum += exam[i]

    if (typeof i == "string") {
        keycount++
    }


}

let sashualo = sum / keycount

console.log(passedcount)
console.log(nopassedcount)
console.log("max", maxname, max)
console.log(Math.round(sashualo))
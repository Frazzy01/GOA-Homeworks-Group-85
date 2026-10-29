let employees = {
    Nika: 2500,
    Ana: 3200,
    Luka: 1800,
    Mariam: 4000,
    Saba: 2200,
    Elene: 3500
}

let keycount = 0
let threethousandupper = 0
let sum = 0
let sashualo = 0
let max = 0
let maxname = ""

for (let i in employees) {
    console.log(i, "-->", employees[i])


    if (typeof i == "string") {
        keycount++
    }

    if (employees[i] >= 3000) {
        threethousandupper++
    }

    sum += employees[i]


    if (max < employees[i]) {
        max = employees[i]
        maxname = i
    }
    sashualo = Math.round(sum / keycount)
}


console.log("RICHEST", maxname)
console.log(sashualo)